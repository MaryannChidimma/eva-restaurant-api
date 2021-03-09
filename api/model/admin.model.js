const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const adminSchema = new Schema(
   {
  
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g
    },
    password: {
      type: String,
      // require: true
    }
  }
);
adminSchema.methods.generateAuthToken = function (){
    return jwt.sign({
        email: this.email,
        admin_Id: this._id
    },
        process.env.JWT_KEY,
        { expiresIn: '1h' }
    );
}

const Admin =  mongoose.model('admin', adminSchema)
module.exports = Admin;

//   name: {
  //     type: String,
  //     trim: true,
  //     required: [true, "Name is required"],
  //     minlength: 3,
  //     maxlength: 50
  //   },
 //   isActive: {
  //     type: Boolean,
  //     default: true,
  //   },
  //   isVerified: {
  //     type: Boolean,
  //     default: false,
  //   }
  // },
  // {
    // image: {
    //   type: String,
    // },
    // role: {
    //   type: String,
    //   trim: true,
    //   enum: ["user", "admin"],
    //   default: "admin"
    // },