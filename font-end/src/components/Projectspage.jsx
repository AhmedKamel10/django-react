import { useState, useEffect } from "react";
import './Home.css'
import { Link } from 'react-router-dom'

function Projectinfo({project}){
  return(
    <div>
      <Link to={`http://localhost:5173/blog/${project.project_article}`}><div className="project-div"><h3>{project.Name} </h3>
        <div className="project-text">{project.description}</div>
         <img className="project-image" src={project.Project_image}></img> 
      </div></Link>
    </div>
  )
}



function Projectspage(){
  const [projects, setProjects] = useState([]);
    async function fetchData(){
        console.log(import.meta.env.VITE_API_URL)
        try{
          const response  = await fetch(`${import.meta.env.VITE_API_URL}Projects`);
          if (!response.ok){
            throw new Error('error');
          }
          const results = await response.json();
          setProjects(results)
        } catch (error){
          console.log('errpr', error)
        }
      }
  
  
    ;
    useEffect(() =>{
        
      fetchData();
      
}, [])

    return(
        <div>
             <h5> These are some of my projects</h5>
             {projects.map((project, i)=>(<div key={i}>{<Projectinfo project={project} key={i}/>}</div>)).sort((a, b) => (b.id > a.id) ? 1:-1)} 
        </div>
       

    )
}
export default Projectspage;