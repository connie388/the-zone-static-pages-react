import React from "react";
import Feature from "./Feature";
import "../../styles/pricing.css";
function Price(props) {
  return (
    <div className="card">
      <div className="price-header">
        <h2>{props.detail.header}</h2>
        <h2>{props.detail.subHeader}</h2>
      </div>
      <div className="flex-container">
        <p className="price-currency">{props.detail.currency}</p>
        <p className="price-amount">{props.detail.amount}</p>
      </div>
      <p className="price-per-person">{props.detail.per}</p>

      <Feature listDetail={props.detail.info} />
    </div>
  );
}

export default Price;
