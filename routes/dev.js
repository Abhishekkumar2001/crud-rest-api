const router = require('express').Router();
const mongoose = require('mongoose');
const Developer = require("../models/developer");


// Create the developer
router.post("/create", async (req, res) =>{
    try{
        const newDeveloper = await Developer.create(req.body);
        res.status(201).json({message : "Success!"})
    }
    catch(err){
        res.status(400).json({message : "Error!"})
    }
});


module.exports = router;