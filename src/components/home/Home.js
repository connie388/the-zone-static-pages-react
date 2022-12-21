import React from "react";
import "../../styles/Home.css";
import AboutUs from "../pages/AboutUs";
import Slider from "../helper/Slider";

function Home() {
  return (
    <>
      {/* <>
        {authenticate ? (
          <div className="dialog-booking">
            <DiscountPopup />
          </div>
        ) : (
          <></>
        )}
      </> */}

      <div>
        <div className="home">
          <div className="home-title">
            <h1>#1 The ZONE</h1>
          </div>
          <div className="home-description">
            <p>Want to have fun. We will ensure your guests have a blast.</p>
          </div>
        </div>
        <div className="slideshow">
          <Slider />
        </div>
        <AboutUs />
      </div>
    </>
  );
}

export default Home;
