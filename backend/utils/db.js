import mongoose from "mongoose";

const DBCon = async()=>{
    try{
        mongoose.connect('mongodb+srv://amalrj:amalrj@cluster0.j2bjy8p.mongodb.net/')
        console.log('mongoDB is connected ')
    }
    catch{
        clg('error connectin mongodb')
    }
}

export default DBCon