import express from 'express';
import { Admin } from '../Model/userModel.js';

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        // Check if all required fields are present in the request body
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.password ||
            !req.body.id ||
            !req.body.gender ||
            !req.body.birthdate ||
            !req.body.billingInfo ||
            !req.body.role || // Assuming role is provided
            !req.body.busTypes // Assuming busTypes is provided for Admin
        ) {
            return res.status(400).send({
                message: 'Send all required fields: name, email, password, id, gender, birthdate, billingInfo, role, busTypes',
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
            role: req.body.role,
            busTypes: req.body.busTypes
        };

        // Create the admin using the Admin model
        const admin = await Admin.create(newAdmin);

        // Send the created admin object in the response
        return res.status(201).send(admin);

    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: error.message });
    }
});


// Get all Admins
router.get('/', async (req, res) => {
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

// Get an Admin by ID
router.get('/:id', async (req, res) => {
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
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, gender, birthdate, billingInfo, role, busTypes } = req.body;

        if (!name || !email || !password || !gender || !birthdate || !billingInfo || !role || !busTypes) {
            return res.status(400).send({
                message: 'Send all required fields: name, email, password, gender, birthdate, billingInfo, role, busTypes',
            });
        }

        const updatedAdmin = {
            name, email, password, gender, birthdate, billingInfo, role, busTypes
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

// Delete an Admin by ID
router.delete('/:id', async (req, res) => {
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