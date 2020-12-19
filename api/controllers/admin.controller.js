const AdminService = require("../services/admin.service");
const response = require("../utils/response");

class  adminController{
  async signup(req, res, next) {
    try {
      const result = await AdminService.signup(req.body);
      res.status(200).send(response("admin created", result));
    } catch (err) {
      next(err)
    }
  }

  async login(req, res, next) {
    try {
      const result = await AdminService.login(req.body);
      res.status(200).send(response("Admin", result));
    } catch (err) {
      next(err)
    }
  }
  async delete(req, res, next) {
    try {
      const result = await AdminService.delete(req.params.adminId);
      res.status(200).send(response("Admin removed", result));
    } catch (err) {
      next(err)
    }
  }
  
}

module.exports = new adminController();
