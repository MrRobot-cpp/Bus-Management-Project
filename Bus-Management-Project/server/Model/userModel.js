import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

// Base schema
const billingInfoSchema = new Schema({
  cardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
  cardHolderName: { type: String, required: true}
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  birthdate: { type: Date, required: true },
  billingInfo: billingInfoSchema,
  role: { type: String, required: true, enum: ['Admin', 'Driver', 'Student'] } // Added role field to distinguish the type
}, { discriminatorKey: 'role' }); // `role` is used as the key to discriminate between types

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
      return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to match passwords
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


export const User = mongoose.model('User', userSchema);

// Admin schema
const busTypeSchema = new Schema({
  busType: { type: String, required: true },
  numberOfSeats: { type: Number, required: true }
});

const adminSchema = new Schema({
  busTypes: [busTypeSchema]
});

export const Admin = User.discriminator('Admin', adminSchema);

// Driver Schema
const driverSchema = new Schema({
  trips: [{ type: Schema.Types.ObjectId, ref: 'Trip' }], // Reference to Trip documents
  averageRating: { type: Number, default: 5 },
  salary: { type: Number, required: true },
  address: { type: String, required: true }
});

export const Driver = User.discriminator('Driver', driverSchema);

// Student schema
const studentSchema = new Schema({
  chosenTrips: [{ type: Schema.Types.ObjectId, ref: 'Trip' }], // Reference to Trip documents
  address: { type: String, required: true }
});


export const Student = User.discriminator('Student', studentSchema);