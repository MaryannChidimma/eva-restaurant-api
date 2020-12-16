const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
   category: {
        type: String,
        require: true
    },
   
    Food:{
        type: String,
        require: true
    },
     price: {
        type: Number, 
        required: true
    },
    imageurl: {
        type: String,
    },
    
}, {timestamps: true}
);

const Menu= mongoose.model("eva-kitchen", blogSchema);

module.exports = Menu;