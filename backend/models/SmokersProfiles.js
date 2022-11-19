const mongoose = require('mongoose');

const profile = new mongoose.Schema({
    smokerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cigarettesGoal:{
        type: Number,
        required: true
    },
    dailyNot:{
        type:Boolean,
        required: true
    },
    weeklyNot:{
        type:Boolean,
        required: true
    },
    noNot:{
        type:Boolean,
        required: true
    }
   
    
})

module.exports = mongoose.model('SmokersProfile', profile);