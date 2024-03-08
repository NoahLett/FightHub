const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        dob_day: {
            type: Number,
            required: true,
            max: 2,
        },
        dob_month: {
            type: Number,
            required: true,
            max: 2,
        },
        dob_year: {
            type: Number,
            required: true,
            max: 4,
        },
        email: {
            type: String,
            required: true,
            max: 50,
        },
        hashed_password: {
            type: String,
            required: true,
        },
        about: {
            type: String,
            max: 500,
        },
        gender: {
            type: String,
            default: 'male',
        },
        show_gender: {
            type: Boolean,
            default: false,
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