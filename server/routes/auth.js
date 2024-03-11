const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//Register
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const sanatizedEmail = email.toLowerCase();

    try {
        const existingUser = await User.findOne({ 
            email: sanatizedEmail, 
        });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists. Please sign in.' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Oops! Something went wrong...' });
    }

    try {
        const hashed_password = await bcrypt.hash(password, 10);
        const newUser = new User({
            email: sanatizedEmail,
            hashed_password,
        });

        const user = await newUser.save();

        const userWithoutPassword = {
            _id: user._id,
            email: user.email,
        };

        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SECRET_KEY, {
            expiresIn: 60 * 24,
        });

        res.status(201).json({ token, userWithoutPassword });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Oops! Something went wrong...' });
    }
});

// Sign In
router.post('/sign-in', async (req, res) => {
    const { email, password } = req.body;
    const sanatizedEmail = email.toLowerCase();

    try {
        const user = await User.findOne({ 
            email: sanatizedEmail, 
        });

        if (user) {
            const correctPassword = await bcrypt.compare(password, user.hashed_password);

            if (correctPassword) {
                const userWithoutPassword = {
                    _id: user._id,
                    email: user.email,
                };

                const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SECRET_KEY, {
                    expiresIn: 60 * 24,
                });

                res.status(200).json({ token, userWithoutPassword });

            } else {
                res.status(400).json({ message: 'Invalid Credentials' });
            }

        } else {
            res.status(400).json({ message: 'Invalid Credentials' });
        }
        
    } catch (error) {
        return res.status(500).json({ message: 'Oops! Something went wrong...' });
    }

})

module.exports = router;