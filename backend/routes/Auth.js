import express from 'express'
import { login, logout, Register } from '../controllers/Auth.js'
import upload from '../middleware/Multer.js'

const AuthRouter = express.Router()

AuthRouter.post('/register',upload.single('postimage'),Register)
AuthRouter.post('/login',login)
AuthRouter.post('/logout',logout)
export default AuthRouter