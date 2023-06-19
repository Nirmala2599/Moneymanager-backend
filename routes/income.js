const express =require('express');

const incomeAction = require("../controllers/income");

const router =express.Router();

router.post('/', incomeAction.createIncome);

router.get('/', incomeAction.getIncomes);

router.get("/:_id", incomeAction.getSpecificIncome);

router.put("/:_id", incomeAction.updateIncome);

router.delete("/:_id", incomeAction.deleteIncome);

module.exports =router;