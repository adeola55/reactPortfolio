import React from "react";
import Projectdetails from "./Projectdetails";
class Portfolio extends React.Component{
  render(){
    return (<div>
        <h1 id= "port" className= "info">Portfolio</h1>
        <Projectdetails></Projectdetails>
    </div>)
  }
}
export default Portfolio;