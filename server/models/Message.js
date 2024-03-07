const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        to_Id: {
            type: String,
            required: true,
        },
        from_Id: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Message', MessageSchema);