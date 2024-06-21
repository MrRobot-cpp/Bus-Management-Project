import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { SECRET_KEY } from '../config/config.js';
import { User , Driver } from '../Model/userModel.js';

const router = express.Router();


//test
router.post('/search', async (req, res) => {
    const { name } = req.body;
  
    try {
      const users = await Driver.find({ name: name });
  
      res.json(users);
    } catch (err) {
      console.error('Error searching users:', err);
      res.status(500).json({ error: 'Error searching users' });
    }
  });

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

