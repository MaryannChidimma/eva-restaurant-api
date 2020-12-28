const mongoose = require('mongoose')
const Admin = require('../model/admin.model');
const bcrypt = require('bcrypt');
const CustomError = require('../utils/custom.error');
require('dotenv').config()
class AdminService {

    async signup(data) {
        const { email, password } = data
        let admin = await Admin.findOne({ email: email })
        if (admin) throw new CustomError("Email already exists");
    
        
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        if(!hashed)throw new CustomError('error occured')
        admin = new Admin({
            _id: mongoose.Types.ObjectId(),
             email: email,
             password:hashed
            })
        const token = admin.generateAuthToken();
        await admin.save();
        
        return {
         admin: admin,
         token: token
        };
    }
     
    async login(data) {
        const { email, password } = data
        if (!email) throw new CustomError("Email is required");
        if (!password) throw new CustomError("Password is required");

        const admin = await Admin.findOne({ email:email });
        if (!admin) throw new CustomError("Incorrect email or password");
    
        const isTrue = await bcrypt.compare(password, admin.password)
        if (!isTrue) throw new CustomError("Incorrect email or password");
    
        const token = admin.generateAuthToken();
    
        return data = {
          admin: admin,
          token: token
        };
      }
   
      async delete(id) {
        const admin = await Admin.remove({ _id: id });
        return admin
    }

}

module.exports = new AdminService();
