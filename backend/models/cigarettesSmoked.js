const mongoose = require('mongoose');

const cigarrete = new mongoose.Schema({
    smokerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    time:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('CigarretesSmoked', cigarrete);