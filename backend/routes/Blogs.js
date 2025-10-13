import express from 'express'
import { Create, DeleteBlog, GetPost, UpdatePost } from '../controllers/Blogs.js'
import { isAdmin } from '../middleware/IsAdmin.js'
import upload from '../middleware/Multer.js'


const BlogsRoute = express.Router()
BlogsRoute.post('/create',isAdmin,upload.single('image'), Create)
BlogsRoute.delete('/delete',isAdmin,DeleteBlog)
BlogsRoute.get('/getPost',GetPost)
BlogsRoute.patch('/updatePost',isAdmin,upload.single('image'),UpdatePost)


export default BlogsRoute