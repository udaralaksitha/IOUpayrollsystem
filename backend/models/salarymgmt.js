const mongoose = require('mongoose');

const empsalarySchema =new mongoose.Schema({

   

    Type:{
        type:String,
        required:true
        
    },
    Date:{
        type:Date,
        required:true
       
    },
    Percentage:{
        type:String,
        required:true
          
    },
    Monthly:{
        type:String,
        required:true
         
    },

    Deduction:{
        type:String,
        required:true
         
    }  
  


    

    

});


module.exports = mongoose.model('Empsalary',empsalarySchema);