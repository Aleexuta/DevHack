require('dotenv').config()
const express = require('express');
const router = express.Router();
const profileSchema = require('../models/SmokersProfiles');
const idFunctions = require('../middlewares/routesFunc');

router.get('/', async (req, res) => {
    try{
        const profiles = await profileSchema.find();
        res.status(200).json(profiles);
    }
    catch(err) {
        res.status(500).json({message: "Error getting smokers profiles!"});
    }
   
})


//GET one  --id
router.get('/:id', idFunctions.getSmokerProfileID, async (req, res) => {
    try{
        res.status(200).json(res.profile);
    }
    catch(err){
        res.status(500).json({message: "Error getting smoker!1"});
    }
    
})


//POST
router.post('/', async (req, res) => {
    const profile = new profileSchema({ 
        smokerId: req.body.smokerId,
        cigarettesGoal: req.body.cigarettesGoal,
        dailyNot: req.body.dailyNot,
        weeklyNot: req.body.weeklyNot,
        noNot: req.body.noNot
    });

    try{
        const newProfile = await profile.save();
        res.status(201).json(newProfile);
    }
    catch(err){
        res.status(400).json({message: err.message});
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