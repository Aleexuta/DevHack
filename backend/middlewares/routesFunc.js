require('dotenv').config()
const express = require('express');

const smokersProfilesSchema = require('../models/SmokersProfiles');
const cigarretesSchema = require('../models/cigarettesSmoked')


async function getSmokerProfileID(req, res, next){
    let profile;
    try{
       // return res.status(404).json(req.params.id)
        profile = await cigarretesSchema.findOne({smokerId:req.params.id});
        if(profile == null){
            return res.status(404).json({message: 'Smoker does not exist!'})
        }
    }
    catch(err){
    return res.status(500).json({message: err.message})
    }
    
        res.profile = profile;
        next(); 
}


async function getSmokerCigarettes(req, res, next){
    let cigarretes;
    try{
       // return res.status(404).json(req.params.id)
       cigarretes = await cigarretesSchema.find({smokerId:req.params.id});
        if(cigarretes == null){
            return res.status(404).json({message: 'Smoker does not exist!'})
        }
    }
    catch(err){
    return res.status(500).json({message: err.message})
    }
    
        res.cigarretes = cigarretes;
        next(); 
}


module.exports = {
    getSmokerProfileID,
    getSmokerCigarettes
}