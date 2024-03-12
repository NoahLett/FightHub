const router = require('express').Router();
const User = require('../models/User')

// Get All Users
router.get('/all-users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Oops! Something went wrong!' });
    }
})

module.exports = router;