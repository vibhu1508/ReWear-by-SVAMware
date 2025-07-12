const mongoose = require('mongoose');
const { Schema } = mongoose;

const swapSchema = new Schema({
    requester: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    requestedItem: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    offeredItem: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: false // null for point-based redemption
    },
    type: {
        type: String,
        enum: ['direct_swap', 'point_redemption'],
        required: true
    },
    pointsUsed: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected', 'completed', 'cancelled'],
        default: 'pending'
    },
    message: {
        type: String,
        maxlength: 500
    }
}, {
    timestamps: true
});

const Swap = mongoose.model('Swap',swapSchema);

module.exports = Swap;