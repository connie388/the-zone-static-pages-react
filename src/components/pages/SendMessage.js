import React from "react";

function SendMessage() {
  return (
    <div>
      <div className="standard-size-form">
        <h1>SEND US A MESSAGE</h1>

        <form>
          <fieldset>
            <label>
              Organization
              <input
                type="text"
                name="organization"
                required
                placeholder="Name of Organization"
              />
            </label>
            <div className="flex-baseline">
              <label>
                Contact Person
                <input
                  type="text"
                  name="contact-person"
                  required
                  placeholder="Your Name"
                />
              </label>
              <label>
                Phone Number{" "}
                <input
                  type="phone"
                  name="phone"
                  required
                  placeholder="Your Contact Number"
                />
              </label>
            </div>
            <label>
              Email Address{" "}
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email Address"
              />
            </label>
            <label>
              Preferred Contact Method
              <input
                type="text"
                name="preferred-contact-method"
                required
                placeholder="Email/Phone Call/Others"
              />
            </label>
            <label>
              Your Message (Tell us what your what!)
              <input
                type="text"
                name="message"
                required
                placeholder="Message"
              />
            </label>
            <input type="submit" value="SEND" />
            <p>
              *If you would like us to contact you via WhatsApp, please send us
              a message at 1-800-whatsapp with your booking details. Thank you!
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default SendMessage;
