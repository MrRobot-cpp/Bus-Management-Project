import mongoose from "mongoose";


const stopSchema = mongoose.Schema({
  stopName: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }  // [longitude, latitude]
  }
});

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  address: { type: String, required: true },
  chosenStop: { type: String, required: true }
});

const tripSchema = mongoose.Schema({
  route: [stopSchema], //creation
  time: { //cre
    openingDate: { type: Date, required: true }, //the time where the trip is visible to the student
    startTime: { type: Date, required: true }, //the time where the trip starts
    endTime: { type: Date, required: true },
    //date: { type: Date, required: true }
  },
  type: {//mini bus  30seats
    busType: { type: String, required: true }, 
    numberOfSeats: { type: Number, required: true }
  },
  students: [studentSchema],
  tripId: {type: Number,recquired: true},
  active: {
    type: Boolean,
    default: true
  }
});

tripSchema.pre('save', function (next) {
  if (this.students.length >= this.type.numberOfSeats) {
    this.active = false;
  }
  next();
});

export const Trip = mongoose.model('Trip', tripSchema);



