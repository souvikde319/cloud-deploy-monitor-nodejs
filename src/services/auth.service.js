const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepo = require("../repositories/user.repository");

exports.register = async (name,email,password)=>{

    const hashed = await bcrypt.hash(password,10);

    const user = await userRepo.createUser(name,email,hashed);

    return user;
};

exports.login = async (email,password)=>{

    const user = await userRepo.findByEmail(email);

    if(!user){
        throw new Error("User not found");
    }

    const valid = await bcrypt.compare(password,user.password);

    if(!valid){
        throw new Error("Invalid password");
    }

    const token = jwt.sign(
        {id:user.id,email:user.email},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    );

    return token;
};