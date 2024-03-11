const express = require('express');
const app = express();
const PORT = 8000;
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const cors = require('cors');

dotenv.config();

//Connect to MongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_STRING);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
}

connect();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(PORT, () => console.log('Server running on PORT ' + PORT));