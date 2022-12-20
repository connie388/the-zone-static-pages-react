import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReminderTemplate = (
  <div id="reminder-template">
    <p>
      Please note that the date and time specified may or may not be available.
    </p>
    <p>setFormData
      Our staff will get back to you ASAP to confirm any booking. Thank you for
      understanding.
    </p>
    <p>
      If you would like us to contact you via WhatsApp, please send us a message
      at 1-800-whatsapp with your booking details. Thank you!
    </p>
  </div>
);
function PageOneTemplate({ formData, setFormData }) {
  return (
    <>
      <fieldset>
        <label>
          Organization
          <input
            type="text"
            id="organization"
            required
            placeholder="Name of Organization"
            onChange={(e) => {
              setFormData({
                ...formData,
                organization: e.target.value,
              });
            }}
            value={formData.organization}
          />
        </label>
        <div className="flex-baseline">
          <label>
            Contact Person
            <input
              type="text"
              name="contactName"
              required
              placeholder="Your Name"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  contactName: e.target.value,
                });
              }}
              value={formData.contactName}
            />
          </label>
          <label>
            Phone Number
            <input
              type="phone"
              name="phone"
              required
              placeholder="Your Contact Number"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phone: e.target.value,
                });
              }}
              value={formData.phone}
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
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
            value={formData.email}
          />
        </label>
      </fieldset>
    </>
  );
}

function PageTwoTemplate({ formData, setFormData }) {
  const today = new Date();
  return (
    <fieldset>
      <label>
        Date
 
        <DatePicker
          minDate={today}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          onChange={(date) => {
            console.log(date);
            setFormData({
              ...formData,
              date: date,
            });
            console.log(formData);
          }}
          selected={formData.date}
        />
      </label>
      <label>
        No. of Participants
        <input
          type="number"
          name="numberOfParticipants"
          required
          placeholder="Minimum booking size is 10"
          onChange={(e) => {
            setFormData({
              ...formData,
              numberOfParticipants: e.target.value,
            });
          }}
          value={formData.numberOfParticipants}
        />
      </label>
      <label>
        Choice of Room
        <input
          type="text"
          name="roomChoice"
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              roomChoice: e.target.value,
            });
          }}
          value={formData.roomChoice}
        />
      </label>
    </fieldset>
  );
}

function PageThreeTemplate({ formData, setFormData }) {
  return (
    <fieldset>
      <label>
        Preferred Contact Method
        <input
          type="text"
          name="contactMethod"
          required
          placeholder="Email/Phone Call/Others"
          onChange={(e) => {
            setFormData({
              ...formData,
              contactMethod: e.target.value,
            });
          }}
          value={formData.contactMethod}
        />
      </label>
      <label>
        Any Other Requests
        <input
          type="text"
          name="message"
          required
          placeholder="Message"
          onChange={(e) => {
            setFormData({
              ...formData,
              message: e.target.value,
            });
          }}
          value={formData.message}
        />
      </label>
    </fieldset>
  );
}

function Booking() {
  const [pageNo, setPageNo] = useState(1);

  const [formData, setFormData] = useState({
    organization: "",
    contactName: "",
    email: "",
    phone: "",
    date: new Date(),
    time: "10:00",
    numberOfParticipants: 0,
    roomChoice: "",
    contactMethod: "",
    message: "",
  });

  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newUser = { ...formData };
    console.log(newUser);

    // get values using FormData
    // const email = formData.get('email');

    // get values using plain object
    // const phone = bookingEntry.phone;

    // if (!Number(bookingEntry.numberOfParticipants)) {
    //   alert("Number of participants must be a number");
    //   return;
    // }
    // const response = await fetch("http://localhost:4000/user/user/verify", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // });

    // console.log(response);
    // if (response.status !== 202) {
    //   alert(response.statusText);
    // } else {
    //   sessionStorage.setItem("token", response.token);
    //   sessionStorage.setItem("verifyId", response.use_id);
    //   setAuthenticate(true);
    //   formData.set("email", "");
    //   formData.set("password", "");
    //   alert("success");
    //   navigate("/");
    // }
  }

  return (
    <div className="booking">
      <div className="standard-size-form">
        <h1>REQUEST A BOOKING</h1>
        <div className="contain-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div key={`div${index + 1}`}>
              <button
                className={pageNo === index + 1 ? "req-dot active" : "req-dot"}
                type="button"
                onClick={() => setPageNo(index + 1)}
              >
                {index + 1}
              </button>
              {index !== 2 ? `---` : ``}
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit}>
          {pageNo === 1 ? (
            <PageOneTemplate formData={formData} setFormData={setFormData} />
          ) : pageNo === 2 ? (
            <PageTwoTemplate formData={formData} setFormData={setFormData} />
          ) : (
            <PageThreeTemplate formData={formData} setFormData={setFormData} />
          )}

          <div className="page-no-container">
            {pageNo > 1 && (
              <button type="button" onClick={() => setPageNo(pageNo - 1)}>
                PREVIOUS
              </button>
            )}

            {pageNo < 3 && (
              <button type="button" onClick={() => setPageNo(pageNo + 1)}>
                NEXT
              </button>
            )}
          </div>
          {pageNo === 3 && <input type="submit" value="SEND" />}

          {ReminderTemplate}
        </form>
      </div>
    </div>
  );
}

export default Booking;
