const Order = require('../model/order.model');
const mongoose = require('mongoose');
const Menu = require('../model/menu.model')
const getMenu = require('../services/menu.service');
const CustomError = require('../utils/custom.error');
class OrderService{
    
    async create(data){
        const { quantity, foodId, customerName } = data;
        const isMenu = getMenu.getOne(foodId)
        if(!isMenu) throw new CustomError('menu not found', 404)
        
        const order = new Order({
            _id: mongoose.Types.ObjectId(),
            customerName: customerName,
            quantity: quantity,
            foodId: foodId
        })
        await order.save();
        return {order: order}
    
       }
   async getAll(){
    return await Order.find()
   }

   async getOne(id){
    const order = await Order.findOne({ _id: id });
    if (!order) throw new CustomError('order does not exist')
    return order
   }

   async update(id, data) {
    const {foodId, quantity, customerName, state} = data;
    const order = await Order.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
    if (!order) throw new CustomError("order not found", 404);
    return order;
}

async delete(id) {
    const order = await Order.remove({ _id: id });
    return order
}
}

module.exports = new OrderService();