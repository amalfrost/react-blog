import express from 'express'
import dotenv from 'dotenv'
import DBCon from './utils/db.js'
import AuthRouter from './routes/Auth.js'
import cookieParser from 'cookie-parser'
import BlogsRoute from './routes/Blogs.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

DBCon()
app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json()); // ✅ Required to parse JSON request bodies
app.get("/",(req,res)=>{
    res.send('hello from backend')
})

app.use("/auth",AuthRouter)
app.use("/blog",BlogsRoute)

app.listen(PORT , ()=>{
    console.log(`app is running on port ${PORT}`)
})