import mongoose from "mongoose";

const DBCon = async()=>{
    try{
        mongoose.connect(process.env.MONGO_DB)
        console.log('mongoDB is connected ')
    }
    catch{
        clg('error connectin mongodb')
    }
}

export default DBCon