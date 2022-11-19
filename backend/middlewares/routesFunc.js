require('dotenv').config()
const express = require('express');

const smokersProfilesSchema = require('../models/SmokersProfiles');
const cigarretesSchema = require('../models/cigarettesSmoked')


async function getSmokerProfileID(req, res, next){
    let profile;
    try{
       // return res.status(404).json(req.params.id)
        profile = await smokersProfilesSchema.findOne({smokerId:req.params.id});
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
    let cigarretes = new Array();
    let final;
    try{
       // return res.status(404).json(req.params.id)
       let result = await cigarretesSchema.find({smokerId:req.params.id});
       if(result == null){
        return res.status(404).json({message: 'Smoker does not exist!'})
    }
       let timeNow = new Date();
       let max = 0;
       let lastSmoked;
       for(let i = 0; i < result.length; i++){
        if(timeNow.getDate() == result[i].time.getDate() && 
                    timeNow.getMonth() == result[i].time.getMonth()&&
                         timeNow.getYear() == result[i].time.getYear()
        ){
            cigarretes.push(result[i])
            if(max < result[i].time.getTime()){
                max = result[i].time.getTime()
                lastSmoked = result[i].time;
            }
        }
       }

       let profile;
       let goal;
        try{
        // return res.status(404).json(req.params.id)
            profile = await smokersProfilesSchema.findOne({smokerId:req.params.id});
            if(profile == null){
                return res.status(404).json({message: 'Smoker does not exist!'})
            }
            goal = profile.cigarettesGoal;
        }
        catch(err){
        return res.status(500).json({message: err.message})
        }

       

       final = {"number": cigarretes.length, lastTime: lastSmoked, "goal": goal};
       
    }
    catch(err){
    return res.status(500).json({message: err.message})
    }
    
        res.final = final;
        next(); 
}


module.exports = {
    getSmokerProfileID,
    getSmokerCigarettes
}