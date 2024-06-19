import express from 'express';
import { Driver } from '../Model/userModel.js';
import { body, param, validationResult } from 'express-validator';

const router = express.Router();

// Validation middleware
const validateStudent = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
    body('id').notEmpty().withMessage('ID is required'),
    body('gender').notEmpty().withMessage('Gender is required'),
    body('birthdate').isISO8601().withMessage('Invalid birthdate format'),
    body('billingInfo.cardNumber').notEmpty().withMessage('Card number is required'),
    body('billingInfo.expiryDate').notEmpty().withMessage('Expiry date is required'),
    body('billingInfo.cvv').notEmpty().withMessage('CVV is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('averageRating').isNumeric().withMessage('Average rating should be a number'),
    body('salary').isNumeric().withMessage('Salary should be a number'),
    body('address').notEmpty().withMessage('Address is required')    
];

// Validation middleware for ObjectId
const validateObjectId = [
    param('id').isMongoId().withMessage('Invalid ID format')
];


// Create a Driver
router.post('/', validateStudent, async (req, res) => {
    try {
        const { name, email, password, id, gender, birthdate, billingInfo, role, trips, averageRating, salary, address } = req.body;

        if (!name || !email || !password || !id || !gender || !birthdate || !billingInfo || !role || !salary || !address) {
            return res.status(400).send({
                message: 'Send all required fields: name, email, password, id, gender, birthdate, billingInfo, role, salary, address',
            });
        }

        const newDriver = {
            name,
            email,
            password,
            id,
            gender,
            birthdate,
            billingInfo,
            role,
            trips,
            averageRating,
            salary,
            address
        };

        const driver = await Driver.create(newDriver);
        return res.status(201).send(driver);

    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Get all Drivers
router.get('/', async (req, res) => {
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

// Get a Driver by ID
router.get('/:id', validateObjectId, async (req, res) => {
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

// Update a Driver by ID
router.put('/:id', validateObjectId, validateStudent, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, gender, birthdate, billingInfo, role, trips, averageRating, salary, address } = req.body;

        if (!name || !email || !password || !gender || !birthdate || !billingInfo || !role || !salary || !address) {
            return res.status(400).send({
                message: 'Send all required fields: name, email, password, gender, birthdate, billingInfo, role, salary, address',
            });
        }

        const updatedDriver = {
            name,
            email,
            password,
            gender,
            birthdate,
            billingInfo,
            role,
            trips,
            averageRating,
            salary,
            address
        };

        const result = await Driver.findByIdAndUpdate(id, updatedDriver, { new: true });

        if (!result) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        return res.status(200).json({ message: 'Driver updated successfully!', data: result });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Update a Driver by ID (partial update)
router.patch('/:id', validateObjectId, validateStudent, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const updates = req.body;

        const result = await Driver.findByIdAndUpdate(id, updates, { new: true });

        if (!result) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        return res.status(200).json({ message: 'Driver updated successfully!', data: result });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Delete a Driver by ID
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Driver.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        return res.status(200).send({ message: 'Driver deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;