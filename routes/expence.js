const express =require('express');

const expenceAction = require("../controllers/expence");

const router =express.Router();

router.post('/', expenceAction.createExpence);

router.get('/', expenceAction.getExpences);

router.get("/:_id", expenceAction.getSpecificExpence);

router.put("/:_id", expenceAction.updateExpence);

router.delete("/:_id", expenceAction.deleteExpence);

module.exports =router;