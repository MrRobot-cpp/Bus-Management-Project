import express from 'express';
import mongoose from 'mongoose';
import { Admin, Driver, Student } from '../Model/userModel.js';
import { isAuthenticated, isAdmin } from '../auth.js';
import { body, param, validationResult } from 'express-validator';
import tripRoutes from '../routes/tripRoutes.js';

const router = express.Router();

//trip routes
router.use('/trips', tripRoutes);

// Validation middleware
const validateAdmin = [
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('email').optional().isEmail().withMessage('Invalid email format'),
    body('password').optional().notEmpty().withMessage('Password is required'),
    body('gender').optional().notEmpty().withMessage('Gender is required'),
    body('birthdate').optional().isISO8601().toDate().withMessage('Invalid birthdate format'),
    body('billingInfo.cardNumber').optional().notEmpty().withMessage('Billing card number is required'),
    body('billingInfo.expiryDate').optional().notEmpty().withMessage('Billing expiry date is required'),
    body('billingInfo.cvv').optional().notEmpty().withMessage('Billing CVV is required'),
    body('busTypes').optional().isArray().withMessage('Bus types should be an array')
];

// Validation middleware for ObjectId
const validateObjectId = [
    param('id').isMongoId().withMessage('Invalid ID format')
];


router.post('/', validateAdmin, async (req, res) => {
    const errors = validationResult(req);
    try {
        // Check if all required fields are present in the request body
        if (
            !req.body.name || !req.body.email ||
            !req.body.password || !req.body.id ||
            !req.body.gender || !req.body.birthdate || !req.body.busTypes // Assuming busTypes is provided for Admin
        ) {
            return res.status(400).send({
                message: 'Send all required fields: name, email, password, id, gender, birthdate, role, busTypes',
            });
        }

        // Create a new admin object with the provided data
        const newAdmin = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            id: req.body.id,
            gender: req.body.gender,
            birthdate: req.body.birthdate,
            billingInfo: req.body.billingInfo,
            busTypes: req.body.busTypes
        };

        // Create the admin using the Admin model
        const admin = await Admin.create(newAdmin);

        // Send the created admin object in the response
        // file deepcode ignore XSS: <please specify a reason of ignoring this>
        return res.status(201).send(admin);

    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Get all Students
router.get('/students', isAuthenticated, async (req, res) => {
    try {
        const students = await Student.find({});
        return res.status(200).json({
            count: students.length,
            data: students,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get all Admins
router.get('/admins', isAuthenticated, async (req, res) => {
    try {
        const admins = await Admin.find({});
        return res.status(200).json({
            count: admins.length,
            data: admins,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get all Drivers
router.get('/drivers',  isAuthenticated, async (req, res) => {
    const errors = validationResult(req);
    try {
        const drivers = await Driver.find({});
        return res.status(200).json({
            count: drivers.length,
            data: drivers,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get a Student by ID
router.get('/students/:id', isAuthenticated, validateObjectId, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        return res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get a Driver by ID
router.get('/drivers/:id',  validateObjectId, async (req, res) => {
    try {
        const { id } = req.params;
        const driver = await Driver.findById(id);

        if (!driver) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        return res.status(200).json(driver);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get an Admin by ID
router.get('/:id', isAdmin, isAuthenticated, validateObjectId, async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findById(id);

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        return res.status(200).json(admin);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Update an Admin by ID
router.put('/:id', isAuthenticated, validateObjectId, validateAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, gender, 
            birthdate, billingInfo, busTypes } = req.body;

        if (!name || !email || !password || !gender || !birthdate 
            || !billingInfo || !busTypes) {
            return res.status(400).send({
                message: 'Send all required fields: name, email, password, gender, birthdate, billingInfo, role, busTypes',
            });
        }

        const updatedAdmin = {
            name, email, password, gender, 
            birthdate, billingInfo, busTypes
        };

        const result = await Admin.findByIdAndUpdate(id, updatedAdmin, { new: true });

        if (!result) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        return res.status(200).json({ message: 'Admin updated successfully!', data: result });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Update a Driver by ID
router.put('drivers/:id',  validateObjectId,  async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password,  trips, averageRating, salary, address } = req.body;

        if (!name || !email || !password || !salary || !address) {
            return res.status(400).send({
                message: 'Send all required fields: name, email, password, gender, birthdate, billingInfo, role, salary, address',
            });
        }

        const updatedDriver = {
            name, email, password, 
             trips, averageRating, 
             salary,address
        };

        const result = await Driver.findOneAndUpdate({id : id }, updatedDriver, { new: true });

        if (!result) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        return res.status(200).json({ message: 'Driver updated successfully!', data: result });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Update an Admin by ID (partial update)
router.patch('/:id', isAuthenticated, validateObjectId, validateAdmin, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const updates = req.body;

        const result = await Admin.findByIdAndUpdate(id, updates, { new: true });

        if (!result) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        return res.status(200).json({ message: 'Admin updated successfully!', data: result });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Delete an Admin by ID
router.delete('/:id', isAuthenticated, validateObjectId, async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Admin.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        return res.status(200).send({ message: 'Admin deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


export default router;