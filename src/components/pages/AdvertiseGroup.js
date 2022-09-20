import React from "react";

function AdvertiseGroup() {
  return (
    <form className="space-container">
      <div className="flex-baseline">
        <div className="standard-size-form ">
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
            Email Address
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
        </div>
        <div className="standard-size-form">
          <label>
            Budget
            <select class="budget">
              {/* <select onchange={sthfunct} class="budget" > */}
              <option selected="selected" value="Select Budget">
                Select Budget
              </option>
              <option value="Less than $1000">Less than $1000</option>
              <option value="$1000 to $2000">$1000 to $2000</option>
              <option value="More than $2000">More than $2000</option>
            </select>
          </label>
          <label>
            Advertise Media
            <select class="media">
              {/* <select onchange={sthfunct} class="budget" > */}
              <option selected="selected" value="Select Media">
                Select Media
              </option>
              <option value="Audio">Audio</option>
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
            </select>
          </label>
          <input type="submit" value="SEND" />
          <p>
            *If you would like us to contact you via WhatsApp, please send us a
            message at 1-800-whatsapp with your booking details. Thank you!
          </p>
        </div>
      </div>
    </form>
  );
}

export default AdvertiseGroup;
