require('./config/config');
require('dotenv/config');


const express = require('express');
const app = express();
const mongoose=require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Configuracion global de rutas
app.use(require('./routes/index.js'));


 
 
  
mongoose.connect(process.env.URLDB,{useNewUrlParser: true,
useCreateIndex:true,
useFindAndModify:false,

}, (err,res)=>{

  if(err) throw err;
    console.log('Base de datos ONLINE');

  
});  
 
app.listen(process.env.PORT, ()=>{
    console.log('Escuchando puerto: ',process.env.PORT);

})