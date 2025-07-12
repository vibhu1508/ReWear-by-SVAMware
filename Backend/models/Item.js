const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000
    },
    category: {
        type: String,
        required: true,
        enum: ['tops', 'bottoms', 'dresses', 'outerwear', 'shoes', 'accessories', 'activewear', 'formal', 'sleepwear']
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: String,
        required: true,
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', '3XL', '4XL', '5XL']
    },
    condition: {
        type: String,
        required: true,
        enum: ['excellent', 'good', 'fair', 'poor']
    },
    brand: {
        type: String,
        trim: true
    },
    color: {
        type: String,
        trim: true
    },
    images: [{
        type: String, // URLs to images
        required: true
    }],
    tags: [{
        type: String,
        trim: true
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pointsValue: {
        type: Number,
        required: true,
        min: 10,
        default: 50
    },
    status: {
        type: String,
        enum: ['pending', 'available', 'reserved', 'swapped', 'removed'],
        default: 'pending'
    },
    views: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Item =  mongoose.model('Item', itemSchema);

module.exports = Item;