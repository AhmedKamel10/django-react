import { useState, useEffect } from "react";
import './Home.css'
import { Link } from 'react-router-dom'
function Bloginfo ({blog}){
    return (
        <div>
            
          <div className="cont">  <Link  to={`/blog/${blog.id}`}> <img className='imgb' src={blog.image} ></img></Link> 
         <div className="words"> <div className='hide'>{blog.discription}</div></div>
           </div>
          <div className='title'> <Link to={`/blog/${blog.id}`}><p1>{blog.title}</p1></Link>   </div>
          <div className='date'> Date: {blog.blog_date}  </div>
         
        </div>
      )
    }
    function searchpage() {
      function handlekeypress(e){
        if (e.key === 'Enter'){
          fetchData(searchTerm);
          
        }

      }
      const [data, setData] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
        async function fetchData(){
          try{
            const response  = await fetch(`${import.meta.env.VITE_API_URL}posts`);
            if (!response.ok){
              throw new Error('error');
            }
            const result = await response.json();
            const nr = result.filter(result => {return result.title.toLocaleLowerCase().includes(searchTerm)});
            
            setIsLoading(false);
            setData(nr)
          } catch (error){
            console.log('errpr', error)
          }
        }
    
    
      ;
      
      useEffect(() =>{
        
        fetchData('heat', []);
        setIsLoading(true);
}, [])

      return (
        
  <div>
    <div className='footer'>
    
    <p2>Copyright © 2024 Ahmed Kamel . All Rights Reserved.</p2> <br></br>
    <a> privacy policy </a> <a> cookies</a>

    </div>
      <div className="search-box">
      <button class="btn-search"><i class="fas fa-search"></i></button>
      <input type="text" class="input-search" onChange={(e) => setSearchTerm(e.target.value) } onKeyUp={handlekeypress} />
    </div>

    {data?.length > 0 ?(
      <div>    { 
        data.map((blog, i) => (
          <div className='blog' key={i}> <Bloginfo  blog={blog} key={i}/>  </div>
        )).sort((a, b) => (b.id > a.id) ? 1:-1)} 
        
        </div>
    ):( !isLoading? (<h4>no results found</h4>)
    
    :(<div class="loader"></div>)
    )}

    
  </div>
 );
    }
    export default searchpage;



  
    