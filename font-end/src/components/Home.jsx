import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './Home.css'
import { Link } from 'react-router-dom'
import {FacebookShareButton} from "react-share";

<p>hoisadjfoijsdoifjo</p>
function Bloginfo({blog}){
  return (
    <div>
      <div>  <Link to={`/blog/${blog.id}`}> <img className='imgb' src={blog.image} ></img></Link>  </div>
      <div className='title'> <Link to={`/blog/${blog.id}`}>{blog.title}</Link>   </div>
      <div className='title'> Date: {blog.blog_date}  </div>
      
      
    </div>
  )
}


function Home() {
  const [data, setData] = useState([]);
  

  useEffect(()=> {
    async function fetchData(){
      
      try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts`);
        if (!response.ok){
          throw new Error('ooops');
        }
        const result = await response.json();
        
        setData(result);
        console.log(data)
      } catch (error){
        console.log('ahhhh', error)
      }
      
    }

    fetchData();
    
  }, []);

  return (

  <div className='test'>
    {
    
    data.map((blog) => (
      <div className='blog'> <Bloginfo  blog={blog} />  </div>
    )).sort((a, b) => (b.id > a.id) ? 1:-1)}
         



  </div>
    
  )
}

export default Home;