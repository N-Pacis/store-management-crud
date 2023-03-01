const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config({path:'./.env'});

let PORT = process.env.PORT 

app.use(express.json())
app.use(require('./routes/product.routes'))

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Connected to database successfully"))
.catch(err=>console.log(err))

app.listen( PORT ,()=>{
    console.log(`Server is listening on port ${PORT}`);
})
