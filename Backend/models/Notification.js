const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['swap_request', 'swap_accepted', 'swap_rejected', 'swap_completed', 'item_approved', 'item_rejected', 'points_awarded'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    relatedItem: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
    relatedSwap: {
        type: Schema.Types.ObjectId,
        ref: 'Swap'
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;