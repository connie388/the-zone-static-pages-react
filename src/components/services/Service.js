import React from "react";
import { Link } from "react-router-dom";

export default function Service(props) {
  const { service, price, detail, image } = props;

  return (
    <div className="card">
      <img className="img-services" src={require(`./images/${image}`)} alt={service} />
      <h1>{service}</h1>
      <p className="price">{price}</p>
      <p className="service-detail">{detail}</p>

      <Link className="linkbutton" to="/contact-us">
        <button>Contact Us</button>
      </Link>
    </div>
  );
}
