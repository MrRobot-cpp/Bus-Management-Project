import express from 'express';
import { Student } from '../Model/userModel.js';
import { isAuthenticated } from '../auth.js';
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
    body('address').notEmpty().withMessage('Address is required')
];

// Validation middleware for ObjectId
const validateObjectId = [
    param('id').isMongoId().withMessage('Invalid ID format')
];

// Create a Student
router.post('/', validateStudent, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password, id, gender, birthdate, billingInfo, chosenTrips, address } = req.body;

        const newStudent = {
            name,
            email,
            password,
            id,
            gender,
            birthdate,
            billingInfo,
            chosenTrips,
            address
        };

        const student = await Student.create(newStudent);
        return res.status(201).send(student);

    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Get all Students
router.get('/', isAuthenticated, async (req, res) => {
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

// Get a Student by ID
router.get('/:id', isAuthenticated, validateObjectId, async (req, res) => {
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

// Update a Student by ID
router.put('/:id', isAuthenticated, validateStudent, validateObjectId, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const { name, email, password, gender, birthdate, 
            billingInfo, chosenTrips, address } = req.body;

        if (!name || !email || !password || !gender 
            || !birthdate || !billingInfo || !address) {
            return res.status(400).send({
                message: 'Send all required fields: name, email, password, gender, birthdate, billingInfo, address',
            });
        }

        const updatedStudent = {
            name, email, password, gender, 
            birthdate, billingInfo, chosenTrips, address
        };

        const result = await Student.findByIdAndUpdate(id, updatedStudent, { new: true });

        if (!result) {
            return res.status(404).json({ message: 'Student not found' });
        }

        return res.status(200).json({ message: 'Student updated successfully!', data: result });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Update a Student by ID (partial update)
router.patch('/:id', isAuthenticated, validateStudent, validateObjectId, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const updates = req.body;

        const result = await Student.findByIdAndUpdate(id, updates, { new: true });

        if (!result) {
            return res.status(404).json({ message: 'Student not found' });
        }

        return res.status(200).json({ message: 'Student updated successfully!', data: result });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Delete a Student by ID
router.delete('/:id', isAuthenticated, validateObjectId, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;

        const result = await Student.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Student not found' });
        }

        return res.status(200).send({ message: 'Student deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
