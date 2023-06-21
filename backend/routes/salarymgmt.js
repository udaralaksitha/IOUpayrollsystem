const express = require('express');
const Empsalary = require('../models/salarymgmt');

const router = express.Router();

//save posts

router.post('/empsalary/save',(req,res)=>{

    let newEmpsalary = new Empsalary(req.body);

    newEmpsalary.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Employee salary details saved successfully"
        });
    });

});

//get posts

router.get('/empsalary',(req,res) =>{
    Empsalary.find().exec((err,empsalary) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEmpsalary:empsalary
        });
    });
});

//get a specific post

router.get("/empsalary/:id",(req,res) => {

    let empsalaryId = req.params.id;


    Empsalary.findById(empsalaryId,(err,empsalary) =>{
        if(err){
            return res.status(400).json({success:false,err});

        }
        return res.status(200).json({
            success:true,
            empsalary
        });
    });

});

//update posts

router.put('/empsalary/update/:id',(req,res) =>{
    Empsalary.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,empsalary)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }

    );
});
//delete post

router.delete('/empsalary/delete/:id',(req,res) =>{
    Empsalary.findByIdAndRemove(req.params.id).exec((err,deletedEmpsalary) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete Successful", deletedEmpsalary
        });
    }); 
});

module.exports = router;