import React from "react";

export default function Service(props) {
  const { service, price, detail, image } = props;

  return (
    <div className="card">
      <img className="img-services" src={image} alt={service} />
      <h1>{service}</h1>
      <p className="price">{price}</p>
      <p className="service-detail">{detail}</p>
      <p>
        <button>Contact Us</button>
      </p>
    </div>
  );
}
