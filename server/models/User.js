const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
        },
        dob_day: {
            type: Number,
            max: 2,
        },
        dob_month: {
            type: Number,
            max: 2,
        },
        dob_year: {
            type: Number,
            max: 4,
        },
        email: {
            type: String,
            max: 50,
        },
        hashed_password: {
            type: String,
        },
        about: {
            type: String,
            max: 500,
        },
        gender: {
            type: String,
            default: 'male',
        },
        trained: {
            type: Boolean,
            default: false,
        },
        arts: {
            type: Array,
            default: [],
        },
        matches: {
            type: Array,
            default: [],
        },
        profile_img: {
            type: String,
            default: '',
        }
    },
    { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);