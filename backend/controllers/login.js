
const User = require("../models/users");


const login = async (req, res) => {
    const {email, password} = req.body;
    let isPasswordCorrect;

    try{
    const user = await User.findOne({email});
    if(password == null || email == null){
        res.status(400).send({message: "Wrong user or password!"});
    }
    
    if(!user){
        res.status(400).send({message: "Wrong user or password!"});
    }

     isPasswordCorrect = await user.comparePassword(password);
   
    
    
    //res.json({isPasswordCorrect: isPasswordCorrect});
    if(!isPasswordCorrect){
        res.status(400).send({message: "Wrong user or password!"});
    }
    else{
        res.status(200).json({userId: user._id, email: user.email});
    }
}
catch(err){
     res.status(400).send({message: "Wrong user or password!"});
}
}

module.exports = {
    login
};