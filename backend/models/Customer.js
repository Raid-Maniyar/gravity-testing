import mongoose from 'mongoose';

const customerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    savedAddresses: [
      {
        name: String, // e.g., 'Home', 'Work'
        address: String,
        coordinates: [Number], // [lng, lat]
      }
    ],
    favoriteDrivers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
      }
    ],
    rating: {
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

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
