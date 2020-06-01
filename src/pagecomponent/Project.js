import React from "react";
function Project(props){
  return (<div className="card projectcard">
  <div class="card-body">
    <h5 class="card-title"> {props.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">UCB Coding Bootcamp</h6>
    <p class="card-text">{props.description}</p>
    <a href={props.github} class="card-link">Card link</a>
    <a href= {props.deployed} class="card-link">Another link</a>
  </div>
  </div>)
}
export default Project;