import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './Home.css'
import { useParams } from 'react-router-dom';
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton} from "react-share";
function Bloginfo({blog}){
  return (

<div className='Bbody'>
      <div> <h1> {blog.title} </h1> </div>
      <div><p> {blog.blog_date} written by Ahmed Kamel </p> 
</div>
<div className='share-this-page'> 
      <FacebookShareButton url={`http://localhost:5173/blog/${blog.id}`}>  facebook </FacebookShareButton></div>
<div className='share-this-page-w'>
      <WhatsappShareButton url={`http://localhost:5173/blog/${blog.id}`}> whatsapp  </WhatsappShareButton>
</div>
<div className='share-this-page-x'>
      <TwitterShareButton url={`http://localhost:5173/blog/${blog.id}`}> x  </TwitterShareButton>
</div>
      <div> <div className='blog_body'><img className='body_img' src={blog.image} ></img> </div> </div>
      <div className='blog_body' dangerouslySetInnerHTML={{__html:blog.body}}></div>
      
      
    </div>
  )
}
function Rinfo({blog}){
  return(
  <div className='disc2'> <a> {blog.title} </a> </div>)

}

function Body() {
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
       
      } catch (error){
        console.log('ahhhh', error)
      }
      
    }

    fetchData();
  }, []);

  const {id} = useParams();
    return(
     <div>   


      <div className='footer'>
    
    <p2>Copyright © 2024 Ahmed Kamel . All Rights Reserved.</p2> <br></br>
    <a> privacy policy </a> <a> cookies</a>

    </div>
        {data.map((blog) => {if (blog.id == id){ return(<Bloginfo blog={blog} />)}} )}
     </div>  
     
     
    )
}
export default Body;
