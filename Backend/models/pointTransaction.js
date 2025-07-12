const mongoose = require('mongoose');
const { Schema } = mongoose;

const pointTransactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['earned', 'spent', 'awarded'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
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
    }
}, {
    timestamps: true
});

const PointTransaction = mongoose.model('PointTransaction', pointTransactionSchema);

module.exports = PointTransaction;