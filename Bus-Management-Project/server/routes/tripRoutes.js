import express from 'express';
import { Trip } from '../Model/tripModel.js';
const router = express.Router();

// Create a Trip
router.post('/', async (req, res) => {
    try {
        const { route, time, type, students, tripId, active } = req.body;

        if (!route || !time || !type || !tripId) {
            return res.status(400).send({
                message: 'Send all required fields: route, time, type, tripId',
            });
        }

        const newTrip = {
            route, time, type, students, tripId, active
        };

        const trip = await Trip.create(newTrip);
        return res.status(201).send(trip);

    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Get all Trips
router.get('/', async (req, res) => {
    try {
        const trips = await Trip.find({});
        return res.status(200).json({
            count: trips.length,
            data: trips,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get a Trip by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await Trip.findById(id);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        return res.status(200).json(trip);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Update a Trip by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { route, time, type, students, tripId, active } = req.body;

        if (!route || !time || !type || !tripId) {
            return res.status(400).send({
                message: 'Send all required fields: route, time, type, tripId',
            });
        }

        const updatedTrip = {
            route, time, type, students, tripId, active
        };

        const result = await Trip.findByIdAndUpdate(id, updatedTrip, { new: true });

        if (!result) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        return res.status(200).json({ message: 'Trip updated successfully!', data: result });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Delete a Trip by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Trip.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        return res.status(200).send({ message: 'Trip deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
