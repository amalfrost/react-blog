import PostModel from "../models/Blogs.js"

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
        console.log(id)

         if (!deletedPost) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }
                res.status(200).json({ success: true, message: "Post deleted", deletedPost });

        
    }catch(err){
        console.log(err)
                res.status(500).json({ success: false, message: "Internal Server Error" });

    }
} 

export { Create , DeleteBlog}