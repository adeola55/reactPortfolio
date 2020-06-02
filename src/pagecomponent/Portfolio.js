import React from "react";
import Projectdetails from "./Projectdetails";
import Projectdetaile from "./Projectdetaile";
class Portfolio extends React.Component{
  render(){
    return (<div className="container">
        <h1 id= "port" className= "info">Portfolio</h1>
        <Projectdetails></Projectdetails>
        <Projectdetaile></Projectdetaile>
    </div>)
  }
}
export default Portfolio;