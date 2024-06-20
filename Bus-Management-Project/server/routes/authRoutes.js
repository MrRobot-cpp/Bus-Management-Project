import express from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config.js';
import { User } from '../Model/userModel.js';

const router = express.Router();


// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, id, gender, birthdate, billingInfo, role } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const newUser = new User({ name, email, password, id, gender, birthdate, billingInfo, role });
        await newUser.save();

        // Create JWT token
        const token = jwt.sign({ userId: newUser._id }, SECRET_KEY, { expiresIn: '1h' });

        return res.status(201).json({ token, user: newUser });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

        return res.status(200).json({ token, user });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
});

// Logout route (optional)
router.post('/logout', (req, res) => {
    // Invalidate token on the client side by removing it
    return res.status(200).json({ message: 'Logged out successfully' });
});

export default router;

