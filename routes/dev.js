const router = require('express').Router();
const mongoose = require('mongoose');
const Developer = require("../models/developer");


// Create the developer
router.post("/create", async (req, res) => {
    try {
        const newDeveloper = await Developer.create(req.body);
        res.status(201).json({ message: "Success!" });
    }
    catch (err) {
        res.status(400).json({ message: "Error!" });
    }
});

//get all the developers
router.get("/all", async (req, res) => {
    try {
        const allDevelopers = await Developer.find();
        res.status(201).json(allDevelopers);
    }
    catch (err) {
        res.status(400).json({ message: "Error!" });
    }
})

// get one the developer
router.get("/:id", async (req, res) => {
    try {
        const developer = await Developer.findById(req.params.id);
        res.status(201).json(developer);
    }
    catch (err) {
        res.status(400).json({ message: "Error!" });
    }
})

//Update the developer
router.patch("/update/:id", async (req, res) => {
    try {
        const { id: _id } = await req.params;
        const changes = await req.body;

        const updatedDeveloper = await Developer.findByIdAndUpdate(_id, { ...changes, _id });
        res.status(201).json({ message: "Success!" });
    }
    catch (err) {
        res.status(400).json({ message: "Error!" });
    }
})


module.exports = router;