const express = require('express'); //import express
const mongoose =require('mongoose'); //import mongoose to communicate with mongodb atlas
const bodyParser = require('body-parser'); //body parser used......
const cors = require('cors');
const multer = require('multer');




const app = express(); //invoke express

//import routes
const empsalaryRoutes = require('./routes/salarymgmt');
const addiempsalaryRoutes = require('./routes/Addisalary');
const empsalaryperRoutes = require('./routes/percentageedit');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(empsalaryRoutes);
app.use(addiempsalaryRoutes);
app.use(empsalaryperRoutes);




const PORT = 8400; //used to run application
const DB_URl = 'mongodb://admin:12345@ac-aa2tjaz-shard-00-00.arxuhal.mongodb.net:27017,ac-aa2tjaz-shard-00-01.arxuhal.mongodb.net:27017,ac-aa2tjaz-shard-00-02.arxuhal.mongodb.net:27017/?ssl=true&replicaSet=atlas-111vzs-shard-0&authSource=admin&retryWrites=true&w=majority' //Mongodb Database connection


mongoose.connect(DB_URl,
{ useNewUrlParser: true,
  useUnifiedTopology: true  
})
.then(() => {
    console.log("Database connected"); 
})
.catch((err) =>  console.log("Database connection error",err)); //catch is used to catch and display connection error message alog with error

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`); //show that app is running on the indicated ports
 
});