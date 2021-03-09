const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
   category: {
    type: mongoose.Schema.Types.ObjectId, ref: 'categorySchema', required: true},
   
    food:{
        type: String,
        require: true
    },
     price: {
        type: Number, 
        required: true,
        // get : v =>Math.round(v),
        // set : v => Math.round(v)
    },
    
    imageurl: {
        type: String,
    },
    
}, {timestamps: true}
);

const Menu= mongoose.model("menu", menuSchema);

module.exports = Menu;

