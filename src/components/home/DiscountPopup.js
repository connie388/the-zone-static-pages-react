import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function DiscountPopup() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  let loginname = sessionStorage.getItem("loginname");

  console.log("DiscountPopup=" + loginname || "");

  return (
    <Modal
      show={show}
      onHide={handleClose}
      //   backdrop="static"
      keyboard={false}
      className="dialog-booking"
    >
      <Modal.Dialog>
        <Modal.Body>
          <button onClick={handleClose} className="close-button topright">
            &times;
          </button>
          <div className="flex-baseline">
            <div className="party-photo-container">
              <img
                className="party-photo"
                src={require(`./images/img-party.jpg`)}
                alt="Party"
              />
            </div>
            <div className="discount-detail">
              <div>
                <h1>WELCOME! {loginname} </h1>
                <h2>SAVE 10% ON WEEKDAY BIRTHDAY PARTIES</h2>
                <p>
                  Use code <strong>10BDAYWEEK</strong> for birthday parties
                  booked Monday - Thursday!*
                </p>
                <br />
                <div>
                  *Minimum 10 persons per birthday party to redeem discount.
                </div>
                <br />

                <form method="dialog">
                  <Link to="/booking" className="link-to">
                    <div className="orange-button">BOOK</div>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

export default DiscountPopup;
