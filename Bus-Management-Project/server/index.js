import express, { response } from "express";
import { PORT, mongoDBURL_trip, mongoDBURL_user} from "./config.js";
import { Trip } from "./Models/tripModel.js";
import { Admin, Driver, Student } from "./Models/userModel.js";
import tripRoutes from "./routes/tripRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import driverRoutes from "./routes/driverRoutes.js";

import mongoose from 'mongoose';
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use('/trips', tripRoutes);
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/driver', driverRoutes);





// Connect to MongoDB for trips collection
mongoose.connect(mongoDBURL_trip, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to trips collection');
    // Optionally define models and perform operations related to trips collection
  })
  .catch((error) => {
    console.error('Error connecting to trips collection:', error);
  });

// Connect to MongoDB for user collection
mongoose.connect(mongoDBURL_user, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to user collection');
    // Optionally define models and perform operations related to user collection
  })
  .catch((error) => {
    console.error('Error connecting to user collection:', error);
  });

// Start the app listening after connecting to both collections
app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});