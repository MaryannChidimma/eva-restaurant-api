const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
type:{
        type: String,
        require: true,
      //  enum : ['Breakfast, Lunch, Dinner'],
      //  uppercase: true,
    },
   
description:{
        type: String,
        require: true
    },
imageurl:{
        type: String,
    },
    
}, {timestamps: true}
);

const Category = mongoose.model("category", categorySchema);

module.exports = Category;