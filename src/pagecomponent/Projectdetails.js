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