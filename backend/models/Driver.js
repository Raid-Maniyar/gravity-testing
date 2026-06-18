import mongoose from 'mongoose';

const driverSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ['auto-rickshaw', 'e-rickshaw'],
    },
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
    },
    licenseNumber: {
      type: String,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    currentLocation: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
        default: [0, 0] // [longitude, latitude]
      },
    },
    rating: {
      type: Number,
      default: 0,
    },
    totalRides: {
      type: Number,
      default: 0,
    },
    walletBalance: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

const Driver = mongoose.model('Driver', driverSchema);

export default Driver;
