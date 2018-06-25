import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Home.css";

class Home extends Component {
  render() {
    var settings = {
      centerMode: true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
      // centerPadding: "200px"
    };
    return (
      <div className="home-container">
        <div>
          <Slider className="slider__bkchu" {...settings}>
            <div>
              <img
                className="home_img"
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fbackground.jpg?alt=media&token=b30c238b-93bb-4aef-811b-bc4c93b4b98d"
                alt=""
              />
            </div>
            {/* <div>
              <img
                className="home_img"
                style={{ width: "100%", height: "50%" }}
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fyoga%202.jpg?alt=media&token=ed779322-f4d2-4940-99ae-c55338e2bb04"
                alt=""
              />
            </div> */}
            <div>
              <img
                className="home_img"
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fme.jpg?alt=media&token=c7f97064-b36d-4fd4-b3a4-46bba1fb5d50"
                alt="me"
                style={{ filter: "grayscale(100%) " }}
              />
            </div>
            <div>
              <img
                className="home_img"
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fblack-forest-forest-hills-45987.jpg?alt=media&token=0390f4ad-446a-496b-9a2f-cb84bc6a118e"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="home_about">
          <h1 className="home_about__title">ABOUT US </h1>
          <p>
            Radiant Yoga has been offering yoga to the Kansas City area since
            June 2011. At Radiant Yoga we have a wide variety of yoga classes
            for all levels, so beginners and seasoned yoga practitioners will
            all find a class they can enjoy. Classes include yoga basics, mixed
            level, vinyasa, restorative, and also a variety of hot yoga classes.
            Along with yoga classes we offer yoga related workshops and have our
            own 200 and 300 HR RYT Yoga Teacher Training Programs.{" "}
          </p>
        </div>
        <div className="back_links">
          <div className="img_container">
            <Link to="/classes">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fyoga-class.jpeg?alt=media&token=0cfdfa19-62c4-4b96-b3a5-d91b99acbae0"
                alt="classes"
              />
              <div className="text_in_img">CLASSES</div>
            </Link>
          </div>
          <div className="img_container">
            <Link to="/prices">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fprices_treatments.jpg?alt=media&token=b864d735-6a27-4e2c-a1e0-06a5e27c031a"
                alt="prices"
              />
              <div className="text_in_img">PRICES</div>
            </Link>
          </div>
          <div className="img_container">
            <Link to="/instructors">
              {" "}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fyoga%202.jpg?alt=media&token=ed779322-f4d2-4940-99ae-c55338e2bb04"
                alt="instructors"
              />
              <div className="text_in_img">INSTRUCTORS</div>
            </Link>
          </div>
          <div className="img_container">
            <Link to="/events">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fworkshop.jpeg?alt=media&token=39b2d8b7-33ba-4856-9500-802d2a9b6b28"
                alt="events"
              />
              <div className="text_in_img">EVENTS</div>
            </Link>
          </div>
          <div className="img_container">
            <Link to="/contact">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/devmnt-personal-project.appspot.com/o/images%2Fcontact.jpg?alt=media&token=4c8e8c94-408f-4050-b23b-7e60939585c3"
                alt="teacherTraining"
              />
              <div className="text_in_img">CONTACT</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
