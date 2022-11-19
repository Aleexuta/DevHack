const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    last_name:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
    
})

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

userSchema.methods.comparePassword = async function (canditatePassword) {
    try{
        const isMatch = await bcrypt.compare(canditatePassword, this.password);
        return isMatch;
    }
    catch(error){
       // console.log(error);
        return false;
    }
};
  

module.exports = mongoose.model('User', userSchema);