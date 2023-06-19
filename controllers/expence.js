const express = require('express')
const mongoose =require("mongoose");

const expence = require("../models/expencedata");

const router =express.Router();

const createExpence =async(req, res) => {
    console.log("Request from Postman: "+req.body);
    
    const newExpence =new expence ({
      
        title: req.body.title,
        roll: req.body.roll,
        amount:req.body.amount,
        category: req.body.category,
       description: req.body.description,
       date: req.body.date,
       
        });
  try{
  await newExpence.save();
    
res.status(201).json(req.body)
      
  }
  catch(error){
    
    res.status(400).json({message: error.message});
   }
};

const getExpences = async(req, res) =>{
    try{
        const expences = await expence.find();
        res.status(200).json(expences);

    }
    catch(error){
        res.status(400).json({message: error.message});

    }
}

const getSpecificExpence = async (req, res) => {
    const _id = req.params._id;
    try {
      const exp = await expence.findOne({_id: _id});
  
      res.status(200).json(exp);
    }
    catch(error) {
      res.status(400).json({ message: error.message });
    }
  }

const updateExpence = async (req, res) => {
    const roll = req.params.roll;
  
    try {
      await expence.findOneAndUpdate({
        roll: roll,
      },
      {
      // teacherName: req.body.teacherName
       // $pop:{ subjects: 1}
      $addToSet:{title:req.body.title}
      }
      )
   
      res.status(201).json({roll: roll});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  const deleteExpence = async (req, res) => {
    const roll = req.params.roll;
  
    try {
      await expence.findOneAndRemove({
        roll: roll,
      });
  
      res.status(201).json({roll: roll});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


   
module.exports.createExpence = createExpence;
module.exports.getExpences = getExpences;
module.exports.getSpecificExpence = getSpecificExpence;
module.exports.updateExpence = updateExpence;
module.exports.deleteExpence = deleteExpence;
