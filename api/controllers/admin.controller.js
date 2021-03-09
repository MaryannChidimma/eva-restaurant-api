const AdminService = require("../services/admin.service");
const response = require("../utils/response");
const Admin = require('../model/admin.model');

class  adminController{
  async signup(req, res) {
      const result = await AdminService.signup(req.body);
      res.status(200).send(response("admin created", result));
  }
async login(req, res) {
      const result = await AdminService.login(req.body);
      res.status(200).send(response("Admin", result));
  }
async mailer(req, res) {
   const result = await AdminService.mailer(req.body);
   res.status(200).send(response("message", result));
}

  async delete(req, res) {
      const result = await AdminService.delete(req.params.adminId);
      res.status(200).send(response("Admin removed", result));
  }

}

module.exports = new adminController();
