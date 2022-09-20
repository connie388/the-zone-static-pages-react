import React, { useState } from "react";
import Booking from "./Booking";
import SendMessage from "./SendMessage";

function ToggleRequest() {
  const [booking, setBooking] = useState(false);

  return (
    <div className="space-container">
      <button
        type="button"
        onClick={() => setBooking(true)}
        className={booking === true ? "customButton active" : "customButton"}
      >
        BOOK NOW
      </button>
      <button
        type="button"
        onClick={() => setBooking(false)}
        className={booking !== true ? "customButton active" : "customButton"}
      >
        CONTACT US
      </button>
      <div className="border">{booking ? <Booking /> : <SendMessage />}</div>;
    </div>
  );
}

export default ToggleRequest;
