require('dotenv').config()
const express = require('express');

const smokersProfilesSchema = require('../models/SmokersProfiles');


async function getSmokerProfileID(req, res, next){
    let profile;
    try{
       // return res.status(404).json(req.params.id)
        profile = await smokersProfilesSchema.findById({_id:req.params.id});
        if(profile == null){
            return res.status(404).json({message: 'Smoker does not exist!2'})
        }
    }
    catch(err){
    return res.status(500).json({message: err.message})
    }
    
        res.profile = profile;
        next(); 
}


module.exports = {
    getSmokerProfileID
}