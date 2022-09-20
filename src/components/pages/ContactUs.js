import React from "react";
import Contact from "./Contact";
import ToggleRequest from "./ToggleRequest";

function ContactUs() {
  return (
    <div className="standard-size-container contact-us">
      <div className="flex-baseline">
        <Contact />
        <ToggleRequest />
      </div>
    </div>
  );
}

export default ContactUs;
