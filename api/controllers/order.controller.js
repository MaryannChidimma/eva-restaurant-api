const OrderService = require("../services/order.service");
const response = require("../utils/response");


class OrderController {
  async create(req, res) {
      const result = await OrderService.create(req.body);
      res.status(201).send(response("Order created", result));
  }

  async getAll(req, res) {
    const result = await OrderService.getAll();
      res.status(200).send(response("All Order", result));
  }

  async getOne(req, res) {
      const result = await OrderService.getOne(req.params.orderId);
      res.status(200).send(response("order", result));   
  }

  async update(req, res) {
    const result = await MenuService.update(req.params.foodId, req.body);
    res.status(200).send(response("order updated", result));
}
 async delete(req, res) {
      const result = await OrderService.delete(req.params.orderId);
      res.status(200).send(response("order deleted", result));
  }
}

module.exports = new OrderController();