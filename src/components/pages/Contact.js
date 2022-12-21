import React from "react";
import "../../styles/pages.css";

function Contact() {
  return (
    <div className="space-container">
      <div className="border">
        <div className="standard-size-form contact">
          <h1>GET IN TOUCH</h1>
          <div>
            <i
              className="contact-icon fa fa-volume-control-phone"
              aria-hidden="true"
            ></i>
            1-800-telephone
          </div>
          <div>
            <i className="contact-icon fab fa-whatsapp" aria-hidden="true" />
            1-800-whatsapp
          </div>
          <div>
            <i className="contact-icon fa fa-envelope" aria-hidden="true" />
            the-zone@gmail.com
          </div>
        </div>
        <hr className="contact-hr" />

        <div className="standard-size-form contact">
          <h1>FIND US HERE</h1>
          <div className="flex-baseline">
            <div>
              <i className="contact-icon fa fa-map-marker" aria-hidden="true" />
            </div>
            <div className="space-container">
              <a
                className="google-map"
                href="https://www.google.com/maps/dir//43.8054616,-79.3075679/@43.8074128,-79.3017743,15z"
              >
                <p>88 The Best Avenue,</p>
                <p>Markham, Ontario,</p>
                <p>Canada</p>
                <p>M7I 9P8</p>
              </a>
            </div>
          </div>
          <div className="space-container">
            <h2 className="h2-special-color">HOW TO GET HERE</h2>
            <div className="space-container">
              <li>Exit from Union station</li>
              <li>Turn Left at corner of Circle K</li>
              <li>Keep straight and walk 2 miles</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
