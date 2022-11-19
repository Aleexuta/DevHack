
const User = require("../models/users");


const login = async (req, res) => {
    const {email, password} = req.body;


    const user = await User.findOne({email});
    if(!user){
        res.json({message: "Wrong user or password!"});
    }

    const isPasswordCorrect = await user.comparePassword(password);
    //res.json({isPasswordCorrect: isPasswordCorrect});
    if(!isPasswordCorrect){
        res.json({message: "Wrong user or password!"});
    }
    else{
        res.status(200).json({userId: user._id, email: user.email});
    }
}

module.exports = {
    login
};