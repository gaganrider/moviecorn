const mongoose = require("mongoose")
const plm = require ('passport-local-mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },

    list:[],
    search:String
})

userSchema.plugin(plm);
const User = mongoose.model('User',userSchema)
module.exports =User
