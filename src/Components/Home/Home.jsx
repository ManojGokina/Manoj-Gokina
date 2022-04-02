import React from "react";
import "./Home.css";
import homeImage from "../../Images/Welcome.svg"
import Header from "../Header/Header";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="home__welcome">
        <div className="text_conatiner">
          <h1 className="text_upper">Hi There,</h1>
          <h1 className="text">I'm Manoj Gokina</h1>
          <p className="home_desc">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.
          </p>
          <button className="home_button">Explore :)</button>
        </div>

        <div className="home_image">
           <img src={homeImage}  alt="Home_image"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
