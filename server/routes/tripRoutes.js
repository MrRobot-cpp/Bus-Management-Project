import express from 'express';
import { Trip } from '../Model/tripModel.js';
import { body, param, validationResult } from 'express-validator';
import xss from 'xss';

const router = express.Router();

// Validation middleware
const validateTrip = [
    body('route').optional().isArray().withMessage('Route should be an array'),
    body('time.openingTime').optional().isISO8601().toDate().withMessage('Invalid opening time format'),
    body('time.startTime').optional().isISO8601().toDate().withMessage('Invalid start time format'),
    body('time.endTime').optional().isISO8601().toDate().withMessage('Invalid end time format'),
    body('type.busType').optional().notEmpty().withMessage('Bus type is required'),
    body('type.numberOfSeats').optional().isNumeric().withMessage('Number of seats should be a number'),
    body('students').optional().isArray().withMessage('Students should be an array'),
    body('tripId').optional().isNumeric().withMessage('Trip ID should be a number'),
    body('active').optional().isBoolean().withMessage('Active should be a boolean')
];

// Validation middleware for ObjectId
const validateObjectId = [
    param('id').isMongoId().withMessage('Invalid ID format')
];

// Create a Trip
router.post('/', validateTrip, async (req, res) => {
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
        // Sanitize the trip object before sending
        const sanitizedTrip = JSON.parse(xss(JSON.stringify(trip)));
        return res.status(201).send(sanitizedTrip);

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
router.get('/:id', validateObjectId, async (req, res) => {
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
router.put('/:id', validateObjectId, validateTrip, async (req, res) => {
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

// Update a Trip by ID (partial update)
router.patch('/:id', validateObjectId, validateTrip, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const updates = req.body;

        const result = await Trip.findByIdAndUpdate(id, updates, { new: true });

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
router.delete('/:id', validateObjectId, async (req, res) => {
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
