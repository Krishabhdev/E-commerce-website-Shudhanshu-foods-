const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
    email: {
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    },
    name:{
        type: string,
        required:true
    },
    cartItems:{
        type:Array,
        default:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:"food"
        }]
    },
    otp:{
        type:Number,
        default:0,
    }

});


const User = mongoose.model("user", userSchema);

module.exports = User;