require('dotenv').config()
const User = require('../models/User')
const { generateAccessToken } = require('../helpers/token')

const userCtrl = {}


userCtrl.signin = async(req,res)=>{
    const { username,password } = req.body
    //console.log(req.body)
    const searchedUser = await User.findOne({"username":username,"password":password})
    //console.log(searchedUser)
    if(searchedUser){
        const accessToken = generateAccessToken({username:username,password:password})
        console.log("Token: ", accessToken)
        res.status(200).json({accessToken:accessToken})
    }else{
        console.log("No hay token")
        res.status(403).json({ message : "User not found" });
    }
}

userCtrl.signup = async(req,res)=>{
    const { name,username,password } = req.body
    const user = new User({name:name,username:username,password:password})
    const accessToken = generateAccessToken({name:name,username:username,password:password})
    await user.save()
    res.status(200).json({accessToken:accessToken})
}
userCtrl.logout = (req,res)=>{
    res.sendStatus(200)
}

module.exports = userCtrl;
