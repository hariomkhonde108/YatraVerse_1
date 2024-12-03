const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // React app is typically served here during development
  methods: ['GET', 'POST']
}));
app.use(bodyParser.json()); // To support JSON-encoded bodies

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bus_booking')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

// Schemas and Models
// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Bus Schema
const busSchema = new mongoose.Schema({
  departure: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  price: { type: Number, required: true }
});

const Bus = mongoose.model('Bus', busSchema);

// Booking Schema
const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  passengers: { type: Number, required: true },
  date: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);

// Routes
// Sign Up Route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Sign In Route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Sign in successful', userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add a new bus
app.post('/add-bus', async (req, res) => {
  const { departure, destination, date, time, price } = req.body;

  try {
    const busDate = new Date(date);
    if (isNaN(busDate)) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    const newBus = new Bus({
      departure,
      destination,
      date: busDate,
      time,
      price
    });

    await newBus.save();
    res.status(201).json({ message: 'Bus added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding bus' });
  }
});

// Search for buses
app.post('/search', async (req, res) => {
  const { departure, destination } = req.body;

  try {
    const buses = await Bus.find({
      departure,
      destination
    });

    if (buses.length === 0) {
      return res.status(404).json({ message: 'No buses found for the given route' });
    }

    res.status(200).json({ buses });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Book a bus
app.post('/book-bus', async (req, res) => {
  const { userId, busId, passengers, date } = req.body;

  try {
    // Find the user and bus details
    const user = await User.findById(userId);
    const bus = await Bus.findById(busId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    // Calculate total price
    const totalPrice = passengers * bus.price;

    // Create a new booking
    const newBooking = new Booking({
      user: user._id,
      bus: bus._id,
      passengers,
      date: new Date(date),
      totalPrice,
    });

    await newBooking.save();

    res.status(201).json({
      message: 'Booking successful',
      bookingDetails: {
        user: user.email,
        bus: {
          departure: bus.departure,
          destination: bus.destination,
          time: bus.time,
          date: bus.date,
        },
        passengers,
        totalPrice,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
