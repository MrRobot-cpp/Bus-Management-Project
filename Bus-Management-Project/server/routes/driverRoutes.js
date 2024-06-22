import express from 'express';
import mongoose from 'mongoose';
import { Driver, User } from '../Model/userModel.js';
//import { isAuthenticated } from '../auth.js';
import { body, param, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import { SECRET_KEY } from '../config/config.js';

const router = express.Router();

// Validation middleware
const validateDriver = [
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

// Get a Driver by ID or Name
router.get('/:idOrName',  async (req, res) => {
    try {
        const { idOrName } = req.params;
        
        let driver;
        if (mongoose.Types.ObjectId.isValid(idOrName)) {
            // If idOrName is a valid MongoDB ObjectId, search by id
            driver = await Driver.findById(idOrName);
        } else {
            // Otherwise, search by name
            driver = await Driver.findOne({ name: idOrName });
        }

        if (!driver) {
            return res.status(404).json({ message: 'Driver not found' });
        }

        return res.status(200).json(driver);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


//test
router.post('/search', async (req, res) => {
    const { name } = req.body;
  
    try {
      const users = await User.find({ name: name });
  
      res.json(users);
    } catch (err) {
      console.error('Error searching users:', err);
      res.status(500).json({ error: 'Error searching users' });
    }
  });

// Create a Driver
router.post('/',  validateDriver, async (req, res) => {
    try {
        const { name, email, password, id, gender, birthdate, 
            trips, averageRating, salary, address } = req.body;

        if (!name || !email || !password || !id || !gender || !birthdate || 
            !salary || !address) {
            return res.status(400).send({
                message: 'Send all required fields: name, email, password, id, gender, birthdate, role, salary, address',
            });
        }



        const newDriver = {
            name,email,password,id,gender,birthdate,
            trips,averageRating,salary,
            address
        };

        const driver = await Driver.create(newDriver);
        return res.status(201).send(driver);

    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: error.message });
    }
});


// Update a Driver by ID (partial update)
router.patch('/:id',  validateObjectId, validateDriver, async (req, res) => {
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
router.delete('/:id',  validateObjectId, async (req, res) => {
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