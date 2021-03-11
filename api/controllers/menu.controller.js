const MenuService = require("../services/menu.service");
const response = require("../utils/response");


class MenuContoller {
  async create(req, res, next) {
      const result = await MenuService.create(req.body, req.file);
      res.status(201).send(response("Menu created", result));
  }

  async getAll(req, res) {
    const result = await MenuService.getAll();
      res.status(200).send(response("All menu", result));
  }

  async getOne(req, res, next) {
      const result = await MenuService.getOne(req.params.foodId);
      res.status(200).send(response("menu", result));   
  }

  async update(req, res, next) {
      const result = await MenuService.update(req.params.foodId, req.body);
      res.status(200).send(response("menu updated", result));
  }

 async delete(req, res, next) {
      const result = await MenuService.delete(req.params.foodId);
      res.status(200).send(response("menu deleted", result));
  }
}

module.exports = new MenuContoller();
