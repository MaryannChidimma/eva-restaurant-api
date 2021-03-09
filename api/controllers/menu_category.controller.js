const CategoryService = require('../services/menu_category.service');
const response = require("../utils/response");


class CategoryContoller {
  async create(req, res, next){
    try{
      const result = await CategoryService.create(req.body);
      res.status(201).send(response("category created", result));
    }catch(err){
      next(err)
    }
  }

  async getAll(req, res) {
    const result = await CategoryService.getAll();
      res.status(200).send(response("All category", result));
  }

  async getOne(req, res) {
      const result = await CategoryService.getOne(req.params.categoryId);
      res.status(200).send(response("category", result));   
  }

  async update(req, res) {
      const result = await CategoryService.update(req.params.categoryId, req.body);
      res.status(200).send(response("category updated", result));
  }

 async delete(req, res) {
      const result = await CategoryService.delete(req.params.categoryId);
      res.status(200).send(response("category deleted", result));
  }
}

module.exports = new CategoryContoller();
