const mongoose = require('mongoose')
const Admin = require('../model/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
        const token = this.generateJwtToken(admin.email, admin._Id)
        await admin.save();
        
        return {
         _id: admin._id,
          email: admin.email,
          password:hashed,
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
    
        const token = this.generateJwtToken(admin.email, admin._Id)
    
        return data = {
          admin: admin,
          token: token
        };
      }

      async delete(id) {
        const admin = await Admin.remove({ _id: id });
        return admin
    }
    
    generateJwtToken = (email, id) => {
        return jwt.sign({
            email: email,
            admin_Id: id
        },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        );
    }

}

module.exports = new AdminService();
