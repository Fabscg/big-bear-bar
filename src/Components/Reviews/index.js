import React from 'react'
import Carousel from 'react-bootstrap//Carousel'


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <div className="text-center">
        <h2>Reviews</h2>
      </div>
      <Carousel.Item>
        <div className="d-block w-100" />
        <Carousel.Caption>
          <h3>Christine Lotoski</h3>
          <p> ⭐⭐⭐⭐⭐</p>
          <p>Today we  decided to try BBB&G based on all the positive reviews. We ordered the Jerk Chicken and it was FABULOUS!  We felt like we flew into Jamaica for this meal.The only thing missing were the palm trees and sandy beaches. Honestly,  it was THE BEST jerk chicken we’ve had since we last visited Jamaica!  Paired with Jamaica’s Red Stripe beer, we had The Best meal without the expense of flying to Jamaica.  Natalie is the perfect host/owner and easily welcomed us with that fabulous Jamaican warmth and hospitality. It’s fantastic Georgina finally has place like this!!  The atmosphere is very casual,  laid back and has more of a take out feel.  If you are more focused on friendly service and authentic Jamaican food, THIS IS THE PLACE!  Highly recommend and  we will most definitely return. Thanks so much Natalie for a GREAT FOOD EXPERIENCE!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-block w-100" />
        <Carousel.Caption>
          <h3>Adrian Lopez</h3>
          <p> ⭐⭐⭐⭐⭐</p>
          <p>**STOP HERE!!!***  THIS is the spot.... Best jerk of my life. Portions are bang on, and broccoli, onions and peppers!!!??? If she's single someone wife her!! Lol 🤣 will come back 1000 times over. You won't regret it!
            Sorry about the pics no time to show it this time. DEVOURED IT!
            Thanks again.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-block w-100" />
        <Carousel.Caption>
          <h3>Linda Goczan</h3>
          <p> ⭐⭐⭐⭐⭐</p>
          <p>
            Had the jerk pork and was not disappointed!  It was so tender and bursting with flavour.  My wife had the jerk chicken and she was just as pleased and impressed with it.  The owners are lovely people and so eager to please.  It’s obvious they are passionate about the food they prepare, and making sure their customers leave happy.  Definitely will be going back to try the other offerings on the menu!.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default CarouselFadeExample;
