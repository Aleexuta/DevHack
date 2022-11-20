require('dotenv').config()
const express = require('express');
const router = express.Router();
const suggestionSchema = require('../models/suggestions')


router.get('/', async (req, res) => {
    try{
        const suggestions = await suggestionSchema.find();
        res.status(200).json(suggestions);
    }
    catch(err) {
        res.status(500).json({message: "Error getting suggestions!"});
    }
   
})

//POST
router.post('/', async (req, res) => {
    const suggestion = new suggestionSchema({ 
        title: req.body.title,
        details: req.body.details
    });

    try{
        const newSuggestion = await suggestion.save();
       
        res.status(200).json(newSuggestion);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})


module.exports = router;