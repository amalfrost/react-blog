import UserModel from "../models/User.js"
import bycript from 'bcryptjs'
import jwt  from "jsonwebtoken"

const Register = async(req, res)=>{
    try{
const {FullName,email,password} = req.body
console.log(req.body)
const existUser = await UserModel.find({email})

if(!existUser){
    return res.status(303).json({success:false,message:'user exists please login'})
}

const imagePath = req?.file?.filename
const hashedPwd = await bycript.hash(password, 10);

const newUser = new UserModel({
    FullName,email,password:hashedPwd,profile:imagePath
})

await newUser.save()
return res.status(200).json({success:true, message:'user added', user:newUser})
    }catch (error){

        console.log(error)
        res.status(500).json({success:false,message:'isr'})
    }
}

const login = async (req,res) =>{
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,message:'all fields are required'
            })
        }

            const findUser = await UserModel.findOne({email})
            if(!findUser){
                   return res.status(500).json({ success:false,message:'No user found' })

            }

            const comparePwd = await bycript.compare(password,findUser.password)
         if(!comparePwd){   
             return res.status(400).json({ success:false,message:'invalid credentials' })

            }

            const token = jwt.sign({userId:findUser._id},process.env.JWT_SECRET)
            res.cookie('token',token,{
                httpOnly:true,
                secure:false,
                maxAge: 3*24*60*60*1000

            })
        res.status(200).json({
            success:true,
            message:'login success',
            user: findUser,
            token
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({success:false, message:'isr'})
    }
}

const logout = async (req,res)=>{
    try{
        res.clearCookie('token')
        res.status(200).json({success:true, message:'user logged out'})

    }catch(err){
                console.log(err)
                return res.status(500).json({success:false, message:'isr'})


    }
}

export{Register, login , logout}