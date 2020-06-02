import React from "react";
class Index extends React.Component{
  render(){
    return (<div id="aboutme" className="container">
      <h1 id= "cont" className= "info">About Me</h1>
        <div className= "row">
          <div className="col-md-4">
        <img className= "img-fluid" src="/assets/images/ade.jpg" alt="portfolioimg" height="400" width="400"/>
        </div>
        <div className="col-md-8">
        <p className = "text-wrap">
        Born in Lagos, Nigeria. Adeola is a good dancer who loves to show his dancing skills at any opportunity he gets. Adeola is the second of four siblings. Graduated from University of Lagos with a Bachelor's degree in history.
        Soccer is my first love. then i fell in love with Basketball few years ago when i moved to the United states. I also find other sports interesting, i love baseball, Formula one, boking, MMA, Golf, Tennis, and NFL.
        I have always been facinated with the internet. imagining the way websites and games were created and how it can be improved in every aspect. That was the reason why i chose to go to a coding bootcamp and learn all this and become a Software developer.
        One other motibvation i have is to make my community back in Nigeria a better place it used to be when i was growing up. I had the toughest of times because of the poverty rate and i want to try as much as possible for the kids behind me to have a better upbringing than i had.
        In my portfolio, i put a lot of pictures that represents some chapters of my life from my childhood to now. i went with the direction of different types of schools i have attended to this stage of ny life.
        </p>
        </div>
        </div>
    </div>)
  }
}
export default Index;