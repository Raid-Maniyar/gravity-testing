import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    pickupLocation: {
      address: { type: String, required: true },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true,
      }
    },
    dropoffLocation: {
      address: { type: String, required: true },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true,
      }
    },
    distance: {
      type: Number, // in km
    },
    estimatedFare: {
      type: Number,
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'ongoing', 'completed', 'cancelled'],
      default: 'pending',
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['cash', 'wallet', 'card'],
      default: 'cash',
    },
    otp: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
