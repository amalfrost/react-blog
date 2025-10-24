import React, { useEffect, useState } from 'react'
import Login from '../components/Login'
import api from '../commons/axiosInstance';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";


function Blog() {
 const [isLoginOpen, setLoginOpen] = useState(false);
 const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/blog/getPost");
        setPosts(res.data.message); // ✅ message contains your array
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-yellow-500">Loading blogs...</div>;

  function handleAddBlogs(){
    setLoginOpen(!isLoginOpen)
  }

  const handleBlogCLick = (id)=>{
    console.log(id)
  }

  return (
    
    <section>
      <div className="text-white p-6">
      <div className='flex justify-between' >
        <h2 className=" text-2xl font-bold mb-6">Latest Blogs</h2>
        <MdAddCircle onClick={handleAddBlogs}  className='text-yellow-600 cursor-pointer text-2xl hover:text-amber-500' ></MdAddCircle>
      {/* <div className='flex  items-center gap-1  '>Add Blogs<FaEdit/></div> */}
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((blog) => (
          <div
          onClick={()=>handleBlogCLick(blog._id)}
            key={blog._id}
            className="p-4 bg-[#1a1a1a] rounded-lg border border-gray-700 hover:border-yellow-600 transition cursor-pointer"
          >
            <div className='flex justify-between'>
              <h3 className="text-xl  font-semibold mb-2">{blog.title}</h3>
              <FaEdit onClick={()=>console.log("Hi")} />
            </div>
            <p className="text-gray-400">{blog.description}</p>
            {/* <img src alt="" /> */}
          </div>
        ))}
      </div>
    </div>
    <Login isOpen={isLoginOpen} onClose={handleAddBlogs} />

      {/* <div className="text-white bg-[#0e0e0e] h-screen flex flex-col items-center justify-center">
      <button
        onClick={() => setLoginOpen(true)}
        className="bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
      >
        Open Login
      </button>

    </div> */}
    </section>
  );
}

export default Blog