import express from 'express'
import { Create, DeleteBlog } from '../controllers/Blogs.js'
import { isAdmin } from '../middleware/IsAdmin.js'
import upload from '../middleware/Multer.js'


const BlogsRoute = express.Router()
BlogsRoute.post('/create',isAdmin,upload.single('image'), Create)
BlogsRoute.delete('/delete',isAdmin,DeleteBlog)


export default BlogsRoute