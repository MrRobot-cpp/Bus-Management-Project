import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { SECRET_KEY } from '../config/config.js';
import { v4 as uuidv4 } from 'uuid';
import { body, param, validationResult } from 'express-validator';
import { User , Driver, Student } from '../Model/userModel.js';

const router = express.Router();

const validateStudent = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('id').notEmpty().withMessage('ID is required'),
    body('agreeOnTerms').custom(value => {
        if (value !== true) {
            throw new Error('mustBeTrue must be true');
        }
    })
]




// Signup route
router.post('/signup', validateStudent, async (req, res) => {
    const errors = validationResult(req);
    try {
        const { name, email, password, address, agreeOnTerms } = req.body;
        
        // Validate input
        if (!name || !email || !password || !address) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const newUser = new Student({ name, email, password, address, id: uuidv4(), agreeOnTerms, role: "Student" });
        await newUser.save();

        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
// Login route
// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log(`Attempting login for email: ${email}`); // Log email

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            console.log(`User not found for email: ${email}`);
            return res.status(400).json({ message: 'wrong mail' });
        }

        console.log(`User found: ${user.email}`); // Log user found

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log(`Password does not match for email: ${email}`);
            return res.status(400).json({ message: 'wrong password' });
        }

        console.log(`Password matches for email: ${email}`); // Log password match

        // Create JWT token
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

        console.log(`Token created for email: ${email}`); // Log token creation

        return res.status(200).json({ token, user });

    } catch (error) {
        console.error(`Error during login for email: ${email}`, error.message);
        return res.status(500).json({ message: error.message });
    }
});
// Logout route (optional)
router.post('/logout', (req, res) => {
    // Invalidate token on the client side by removing it
    return res.status(200).json({ message: 'Logged out successfully' });
});

export default router;

