import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { PORT, mongoDBURL } from './config/config.js';
import { Trip } from './Model/tripModel.js';
import { Admin, Driver, Student } from './Model/userModel.js';
import tripRoutes from './routes/tripRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import driverRoutes from './routes/driverRoutes.js';
import authRoutes from './routes/authRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins for simplicity; adjust as needed
    methods: ['GET', 'POST'],
  },
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use('/trips', tripRoutes);
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/driver', driverRoutes);
app.use('/auth', authRoutes);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle message events
  socket.on('message', (data) => {
    // Broadcast the message to all connected clients
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Connect to MongoDB
mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('App connected to db');
    server.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
