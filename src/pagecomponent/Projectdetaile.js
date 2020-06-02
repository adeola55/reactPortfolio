import React from  "react";
import Project from "./Project"
class Projectdetaile extends React.Component 
{
  state ={ 
    projects :[
    {
  name: "Work Day Scheduler",
  github: "https://github.com/adeola55/homework05",
  deployed: "https://adeola55.github.io/homework05/",
  description: "Helps user plan day activities and its color quoted to help know what time of the day it is"
},
{
name: "Updated Portoflio",
github: "https://github.com/adeola55/updated-portfolio",
deployed: "https://adeola55.github.io/updated-portfolio/",
description: "an updated portfolio with links to the deployed URL and github page"
},
{
name: "Team Profile Generator",
github: "https://github.com/adeola55/teamprofilegenerator",
deployed: "",
description: "Its a backend app that helps users to document profiles with the users input. it runs locally on users machine"
},
{
name: "Fitness Tracker",
github: "https://github.com/adeola55/fitnessTracker",
deployed: "https://polar-ocean-25753.herokuapp.com/",
description: "App is a fitness app that helps document users exercise and progress."
}
]};
render(){
 return(<div className ="cardDetails">
   <div className ="portfoliocontainer">
  {this.state.projects.map((projec,index) => (
    <Project 
       name= {projec.name}
       github= {projec.github}
       deployed= {projec.deployed}
       description= {projec.description}
       key= {index}
        />
  ))}
  </div>
 </div>)
}
}

export default Projectdetaile;