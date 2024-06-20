import jwt from 'jsonwebtoken';
import { SECRET_KEY } from './config/config.js';
import { User } from './Model/userModel.js'; 

/// Middleware to verify JWT token
export const isAuthenticated = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};


// Middleware to check user roles
export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.user.userId);
    if (user && user.role === 'Admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied, admin only' });
    }
};
