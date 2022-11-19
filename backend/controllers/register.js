
const User = require("../models/users");


const register = async (req, res) => {
    const userCheck = await User.findOne({email: req.body.email});
   // res.json(userCheck);
    if(userCheck){
        res.json({message: "A user with this email already exists!"});
    }else{
       // res.json({msg: "aici"});
        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });

        try{
            
            const newUser = await user.save();
            res.status(201).json({message: "Registered"});
            

        }catch(err){
            res.status(404).json({message: "Registration failed!"});
        }
    }
}

module.exports = {
    register
};