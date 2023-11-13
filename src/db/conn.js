const mongoose = require('mongoose')



// creating a database

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('connecting to database successfully ')
}).catch((e)=>{
    console.log('connection failed..!',e)
})

