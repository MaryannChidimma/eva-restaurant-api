const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
   category: {
        type: String,
        require: true
    },
   
    food:{
        type: String,
        require: true
    },
     price: {
        type: Number, 
        required: true,
        get : v =>Math.round(v),
        set : v => Math.round(v)
    },
    
    imageurl: {
        type: String,
    },
    
}, {timestamps: true}
);

const Menu= mongoose.model("eva-kitchen", menuSchema);

module.exports = Menu;

// tags: {
//     type: Array, 
//     validate: {
//     validator: function(){
//         return v && v.length > 0
//     }
//     }
// },