import express, { response } from "express";
import { PORT, mongoDBURL} from "./config/config.js";
import { Trip } from "./Model/tripModel.js";
import { Admin, Driver, Student } from "./Model/userModel.js";
import tripRoutes from "./routes/tripRoutes.js"
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import driverRoutes from "./routes/driverRoutes.js";
import authRoutes from './routes/authRoutes.js';
import mongoose from 'mongoose';
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use('/trips', tripRoutes);
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/driver', driverRoutes);

app.use('/auth', authRoutes);






// Connect to MongoDB for trips collection
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('app connected to db');
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });