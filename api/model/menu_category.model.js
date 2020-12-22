const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
categoryName: {
        type: String,
        require: true
    },
   
categoryDescription:{
        type: String,
        require: true
    },
imageurl: {
        type: String,
    },
    
}, {timestamps: true}
);

const Category= mongoose.model("category", categorySchema);

module.exports = Category;