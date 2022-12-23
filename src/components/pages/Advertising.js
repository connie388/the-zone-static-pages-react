import React from "react";
import "../../styles/pages.css";
import rightArrow from "../../assets/icons/arrow-right-from-bracket-solid.svg";
import phonePhoto from "../../assets/images/img-phone.jpg";
import communityPhoto from "../../assets/images/img-community.jpg";
import handshakePhoto from "../../assets/images/img-handshake.jpg";
import AdvertiseGroup from "./AdvertiseGroup";

function Advertising() {
  return (
    <div>
      <div className="advertising align-title-right-container">
        <div className="container-align">
          <div>
            <h1 className="standard-header">THE ZONE Ads</h1>
          </div>
          <div className="big-header">
            A Great Way to reach your audiences where they shop, buy and play.
          </div>
        </div>
      </div>
      <p className="standard-header">WHY THE ZONE ADS?</p>
      <div className="paragraph">
        <div className="paragraph-container flex-center-container">
          <p className="zone-info">
            With over one million members, the Zone can help you reach this
            community with integrated advertising and promotional programs. We
            invite you to get in touch with our team to learn more!
          </p>

          <div className="b-container-grid">
            <div className="b-box">
              <div>
                <img className="b-box-phone" alt="phone" src={phonePhoto} />
              </div>
              <div>
                <h2>Reach</h2>
              </div>
              <div className="b-box-detail">
                New customers online with the Zone Ads
                <br />
                <br />
                <img className="b-box-icon" src={rightArrow} alt="next page" />
              </div>
            </div>
            <div className="b-box">
              <div>
                <img
                  className="b-box-phone"
                  alt="community"
                  src={communityPhoto}
                />
              </div>
              <div>
                <h2>Tech</h2>
              </div>
              <div className="b-box-detail">
                Use the right tools to help you promote your products
                <br />
                <br />
                <img className="b-box-icon" src={rightArrow} alt="next page" />
              </div>
            </div>
            <div className="b-box">
              <div>
                <img
                  className="b-box-phone"
                  alt="handshake"
                  src={handshakePhoto}
                />
              </div>
              <div>
                <h2>Community</h2>
              </div>
              <div className="b-box-detail">
                Introduct your products to our gaming groups who review, play
                and purchase
                <br />
                <br />
                <img className="b-box-icon" src={rightArrow} alt="next page" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paragraph advertising-contact">
        <div className="paragraph-container">
          <h2 className="standard-header">GET STARTED</h2>
          <p>
            Connect with the Zone Ads account executive to learn more about
            options to help you achieve your advertising goals.
          </p>
          <AdvertiseGroup />
        </div>
      </div>
    </div>
  );
}

export default Advertising;
