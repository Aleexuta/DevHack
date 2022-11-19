require('dotenv').config()
const express = require('express');
const router = express.Router();
const cigaretteSchema = require('../models/cigarettesSmoked');
const idFunctions = require('../middlewares/routesFunc');

router.get('/', async (req, res) => {
    try{
        const cigarette = await cigaretteSchema.find();
        res.status(200).json(cigarette);
    }
    catch(err) {
        res.status(500).json({message: "Error getting cigarettes!"});
    }
   
})


//GET one  --id
router.get('/:id', idFunctions.getSmokerProfileID, async (req, res) => {
    try{
        //size of ciggaretesSmoked
        res.cigarretes
        
    }
    catch(err){
        res.status(500).json({message: "Error getting smoker!1"});
    }
    
})


//POST
router.post('/', async (req, res) => {
    const cigarette = new cigaretteSchema({ 
        smokerId: req.body.smokerId
    });

    try{
        const newCigarette = await cigarette.save();
        res.status(201).json(newCigarette);
    }
    catch(err){
        res.status(400).json({message: "Error adding cigarettes!"});
    }
})

//Put
router.put('/:id', idFunctions.getSmokerProfileID, async (req, res) => {
   try{ 
    
    const updatedProfile = await profileSchema.updateOne({_id : res.profile._id}, req.body);
    res.status(201).json({message: "Smoker profile updated!"});
}
   catch(err){
     res.status(500).json({message: err.message});
    }
})


module.exports = router;