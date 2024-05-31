import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, generatePath} from 'react-router-dom'
import Body from './components/Body'
import Searchpage from './components/Searchpage';
import Projectspage from './components/Projectspage'
function Bloginfo({blog}){
  return (
    <div>
      <div> <img className='imgb' src={blog.image} ></img> </div>
      <div className='title'>  {blog.title}  </div>
      <div className='title'> Date: {blog.blog_date}  </div>
      <div className='imgb'> <p>hi this is a test </p></div>
      
      
    </div>
  )
}

function App() {
  const [data, setData] = useState([]);
  useEffect(()=> {
    async function fetchData(){
      try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts`);
        const response_projects = await fetch(`${import.meta.env.VITE_API_URL}Projects`);
        
        if (!response.ok){
          throw new Error('ooops');
        }
        const result = await response.json();
        const projects_result = await response_projects.json();
        
        setData(result);
       
      } catch (error){
        console.log('ahhhh', error)
      }
      
    }

    fetchData();
  }, []);

  return (
    <div>

  <Routes>
    <Route exact path='/blog/:id' element={<Body></Body>}/>
    <Route exact path='/' element={<Searchpage></Searchpage>}/>
    <Route exact path='/projects' element={<Projectspage></Projectspage>}/>
  </Routes>
       
  
  </div>

  )
}

export default App;
