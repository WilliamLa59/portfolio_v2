import React, { useState } from 'react'

import data from "./projectdata.json"
import '../../shared/Global.scss'
export const Projects = () => {

    const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects">
        <h2>03. Things I've Built</h2>
     
        <button style={showMore? {display: "none"}: {display: "inline"}} onClick={()=>{setShowMore(true);}}>Show More</button>
      
        <section style={showMore? {display: "block"} : {display: "none"}}>
            {data.map((project, x)=>{
                return(
                    <p key={x}>
                        {project.title}
                        {project.tech}
                        {project.desc} 
                    </p>
                    
                )
            })}
            <button onClick={()=>{setShowMore(false);}}>Show Less</button>
        </section>
        
    </section>

    
  )
}
