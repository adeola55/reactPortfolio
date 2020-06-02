import React from "react";
// import {Link} from "react-router-dom";
function Header(){
  return (<div className ="cardHeader">
    <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="#ade">Adeola Afariogun</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#aboutme">About Me <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#port">Portfolio</a>
      <a className="nav-item nav-link" href="#contact">Contact</a>
    </div>
  </div>
</nav>
  </div>)
}
export default Header;