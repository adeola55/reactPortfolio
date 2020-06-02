import React from 'react';
import './App.css';
import Header from "./pagecomponent/Header"
import Footer from "./pagecomponent/Footer"
import Index from "./pagecomponent/Index";
import Portfolio from "./pagecomponent/Portfolio";
import Contact   from "./pagecomponent/Contact"
import {BrowserRouter,Route, Switch} from "react-router-dom"

function App() {
  return (
   <div>
     <BrowserRouter>
     <Header/>
     <Index />
     <Portfolio />
    <Contact />
    {/* <Switch>
      <Route exact="/" component ={Index}/>
      <Route exact="/Index" component={Index} />
      <Route exact="/Portfolio" component={Portfolio} />
      <Route exact="/Contact" component={Contact} />
      </Switch> */}
      <Footer/>
     </BrowserRouter>
    
   </div>
  );
}

export default App;
