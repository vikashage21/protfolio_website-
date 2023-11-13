const mongoose = require('mongoose')


mongoose.set('strictQuery', false); // Address the deprecation warning
// creating a database

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('connecting to database successfully ')
}).catch((e)=>{
    console.log('connection failed..!',e)
})

