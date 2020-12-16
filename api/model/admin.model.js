const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const adminSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
      match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "admin"
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true
  }
);
const Admin =  mongoose.model('admins', adminSchema)
module.exports = Admin;
