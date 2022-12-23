import React, { useState } from "react";

function SendMessage() {
  const [inputValue, setInputValue] = useState({
    organization: "",
    contactPerson: "",
    phone: "",
    email: "",
    preferredContactMethod: "",
    message: "",
  });

  const {
    organization,
    contactPerson,
    phone,
    email,
    preferredContactMethod,
    message,
  } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  async function onSubmit(e) {
    e.preventDefault();

    alert("Message sent");
  }

  return (
    <div>
      <div className="standard-size-form">
        <h1>SEND US A MESSAGE</h1>
        <form onSubmit={onSubmit}>
          <fieldset>
            <label>
              Organization
              <input
                type="text"
                name="organization"
                value={organization}
                onChange={handleChange}
                required
                placeholder="Name of Organization"
              />
            </label>
            <div className="flex-baseline">
              <label>
                Contact Person
                <input
                  type="text"
                  name="contactPerson"
                  value={contactPerson}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </label>
              <label>
                Phone Number{" "}
                <input
                  type="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
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
                value={email}
                onChange={handleChange}
                required
                placeholder="Your Email Address"
              />
            </label>
            <label>
              Preferred Contact Method
              <input
                type="text"
                name="preferredContactMethod"
                value={preferredContactMethod}
                onChange={handleChange}
                required
                placeholder="Email/Phone Call/Others"
              />
            </label>
            <label>
              Your Message (Tell us what your what!)
              <input
                type="text"
                name="message"
                value={message}
                onChange={handleChange}
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
