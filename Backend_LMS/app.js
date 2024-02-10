const express=require('express');
const BookRoutes=require('./api/routes/BookRoutes')
const mongoose=require('mongoose')
const cors =require('cors') 
const app=express();
const bodyParser=require('body-parser')
mongoose.connect('mongodb://0.0.0.0:27017/BookMangenmentSystem')

 
mongoose.connection.on('error',err=>{
    console.log('connection falied')
});
mongoose.connection.on('connected',connected=>{
    console.log('connected with database....')
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
 
app.use('/Book',BookRoutes)
 
app.use(express.static('test'))

app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
})

app.use((req,resp,next)=>{
resp.status(200).json({
    message:'app is running'
})

})

module.exports=app;

