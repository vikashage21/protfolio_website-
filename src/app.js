require('dotenv').config()
const express = require('express')

const mongoose= require('mongoose')

const app = express()

const port = process.env.PORT || 3000

require('./db/conn')

const path = require('path')

const hbs = require('hbs')
const bodyParser = require('body-parser')


// using static folder here

const staticPath = path.join(__dirname,'../public')
// creating pratialPath here 

const pratialPath = path.join(__dirname,'./template/pratials')


// creating template folder 

const tempPath = path.join(__dirname,'./template/views')


const userData = require('../src/modles/contact')
//  console.log(tempPath)

hbs.registerPartials(pratialPath)


// using middlewaears

app.use('/css',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/js')))
app.use('/jq',express.static(path.join(__dirname,'./node_modules/jquery/dist')))
app.use(express.static(staticPath))

// its is require for post method 

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.urlencoded({extended:false}))
// setting view engine as hbs 

app.set('view engine', 'hbs')

// setting template path  as view 

app.set('views',tempPath)

mongoose.set('strictQuery', false); // Address the deprecation warning




// creating routing here

app.get ('/',(req, res)=>{
    res.render('index')
})
 

// creating routing for contact page

app.post('/contact' ,async (req,res)=>{
    try{

        const data={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            subject:req.body.subject,
            message:req.body.message,


        }

        for (const key in data) {
            if(data[key]==''){
                return res.send('Please fill out all fields')
                
            }
           
        } 
        
            res.render('done')
            
    
    
        const user = await userData.insertMany([data])

    
      }
        



    catch(e){
        res.status(500).send('Internal Server Error')
        console.log(e)
    }
})


// server created here ..






app.listen(port, ()=>{
    console.log(`listening on port ${port}` )
})

