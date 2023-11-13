const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
      
    },
    phone:{
        type:String ,
        required:true,
       
    },
     subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})


const userData = new mongoose.model('userData',userSchema)

module.exports=userData;