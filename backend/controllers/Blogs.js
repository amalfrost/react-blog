import PostModel from "../models/Blogs.js"
import fs from 'fs'
import path from 'path'

const Create = async (req, res) => {
    try {

        const { title, description } = req?.body
        const imagePath = req?.file?.filename

        console.log("Received:", title, description, imagePath);


        const createBlog = new PostModel({
            title,
            description,
            image: imagePath
        })

        console.log(createBlog)
        await createBlog.save()
        res.status(200).json({ success: true, message: 'post added', post: createBlog })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'isr' })

    }
}

const DeleteBlog = async (req,res)=>{
    try{
 const id = req.query.id; // use query instead of params
        const deletedPost = await PostModel.findByIdAndDelete(id);        // const postId = await PostModel.find({})



         if (!deletedPost) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }
        if(deletedPost.image){
            const profilePath = path.join('public/images',deletedPost.image)
            fs.promises.unlink(profilePath)
            .then(()=>{console.log('post deleted')})
            .catch(err =>console.log(err))
        }
                res.status(200).json({ success: true, message: "Post deleted", deletedPost });

        
    }catch(err){
        console.log(err)
                res.status(500).json({ success: false, message: "Internal Server Error" });

    }
} 

const GetPost = async(req,res)=>{

    try{
        const posts = await PostModel.find({})
        console.log(posts)

        if(!posts){
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        res.status(200).json({success:true, message:posts})


    }catch(err){
        console.log(err)
                res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const UpdatePost = async(req,res)=>{
    try{
        const {title,description} = req.body
    const postId = req.query.id
    console.log(postId,'id')
    const postUpdate = await PostModel.findById(postId)

    console.log(postUpdate)
    if(!postId){
       return  res.status(404).json({success:false,message:'Post not found'})
    }

    if(title){
        postUpdate.title = title
    }
    if(description){
        postUpdate.description = description
    }
    if(req?.file){
        postUpdate.image= req.file.filename
    }

    await postUpdate.save()
    res.status(200).json({success:true,message:'post updated'})

    }catch(err){
        console.log(err)
                        res.status(500).json({ success: false, message: "Internal Server Error" });

    }


}

export { Create , DeleteBlog,GetPost,UpdatePost}