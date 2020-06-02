import React from  "react";
import Project from "./Project"
class Projectdetail extends React.Component 
{
  state ={ 
    projects :[
    {
      name: "Weather API",
      github: "https://github.com/adeola55/homework06",
      deployed: "https://adeola55.github.io/homework06/",
      description: "weather app showing forecast of any city in the world for a particular date and 5 more days"
  },
  {
    name: "Portfolio",
    github: "https://github.com/adeola55/homework02",
    deployed: "https://adeola55.github.io/homework02/",
    description: "my first portfolio about me, some specific aspect of my life and my contact"
},
{
  name: "Password Generator",
  github: "https://github.com/adeola55/homework03",
  deployed: "https://adeola55.github.io/homework03/",
  description: "the app generates random passwords for users"
},
{
  name: "Code Quiz",
  github: "https://github.com/adeola55/homework04",
  deployed: "https://adeola55.github.io/homework04/",
  description: "a history quiz of america. timer reduces by 5 when user gets the answer wrong"
},
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
   <h3>Checkout my Projects</h3>
   <div className ="portfoliocontainer">
  {this.state.projects.map((proje,index) => (
    <Project 
       name= {proje.name}
       github= {proje.github}
       deployed= {proje.deployed}
       description= {proje.description}
       key= {index}
        />
  ))}
  </div>
 </div>)
}
}

export default Projectdetail;