const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    }  
})


  

module.exports = mongoose.model('Suggestion', suggestionSchema);