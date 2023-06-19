const express =require("express");
const mongoose =require("mongoose");

const income = require("../models/incomedata");

const router =express.Router();

const createIncome =async(req, res) => {
    console.log("Request from Postman: "+req.body);
    
    const newIncome =new income ({
      
      title: req.body.title,
      roll:req.body.roll,
      amount:req.body.amount,
      category: req.body.category,
     description: req.body.description,
     date: req.body.date,
     
    });
  try{
  await newIncome.save();
    
res.status(201).json(req.body)
      
  }
  catch(error){
    
    res.status(400).json({message: error.message});
   }
};

const getIncomes = async(req, res) =>{
    try{
        const Incomes = await income.find();
        res.status(200).json(Incomes);

    }
    catch(error){
        res.status(400).json({message: error.message});

    }
}

const getSpecificIncome = async (req, res) => {
    const _id = req.params._id;
    try {
      const inco = await income.findOne({_id: _id});
  
      res.status(200).json(inco);
    }
    catch(error) {
      res.status(400).json({ message: error.message });
    }
  }

const updateIncome = async (req, res) => {
    const roll = req.params.roll;
  
    try {
      await student.findOneAndUpdate({
        roll: roll,
      },
      {
       // name: req.body.name
       // $pop:{ subjects: 1}
       $addToSet:{title:req.body.title}
      }
      )
   
      res.status(201).json({roll: roll});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  const deleteIncome = async (req, res) => {
    const roll = req.params.roll;
  
    try {
      await income.findOneAndRemove({
        roll: roll,
      });
  
      res.status(201).json({roll: roll});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


   
module.exports.createIncome = createIncome;
module.exports.getIncomes = getIncomes;
module.exports.getSpecificIncome = getSpecificIncome;
module.exports.updateIncome = updateIncome;
module.exports.deleteIncome = deleteIncome;
