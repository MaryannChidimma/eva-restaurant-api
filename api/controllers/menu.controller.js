const MenuService = require("../services/menu.service");
const response = require("../utils/response");

class MenuContoller {
  async create(req, res, next) {
    try {
      const result = await MenuService.create(req.body);
      res.status(201).send(response("Menu created", result));
    } catch (err) {
      next(err)
    }
  }

  async getAll(req, res, next) {
    try {
      const result = await MenuService.getAll();
      res.status(200).send(response("All users", result));
    } catch (err) {
      next(err)
    }
  }

  async getOne(req, res, next) {
    try {
      const result = await MenuService.getOne(req.params.foodId);
      res.status(200).send(response("menu", result));
    } catch (err) {
      next(err)
    }
  }

  async update(req, res, next) {
    try {
      const result = await MenuService.update(req.params.foodId, req.body);
      res.status(200).send(response("menu updated", result));
    }
    catch (err) {
      next(err)
    }
  }

  async delete(req, res, next) {
    try {
      const result = await MenuService.delete(req.params.userId);
      res.status(200).send(response("menu deleted", result));
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new MenuContoller();
