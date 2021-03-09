const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'menus', required: true },
        quantity: { type: Number, default: 1 },
        state:{
            type: String,
            require: true,
            enum : ['Pending, Active, Declined, Delivered'],
            uppercase: true,
            trim: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('order', orderSchema)
