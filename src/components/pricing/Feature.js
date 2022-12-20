import React from "react";
import { Link } from "react-router-dom";

export default function Feature({ listDetail }) {
  const displayDetail = (list) => {
    return list.map((item, index) => (
      <div key={`feature${index}`} className="item space-container showline">
        <div className="text-center">
          <i aria-hidden="true" className="far fa-check-circle"></i>
          <span>{item.text}</span>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {listDetail && <div>{displayDetail(listDetail)}</div>}

      <Link to="/booking" className="link-to">
        <button>BOOK</button>
      </Link>
    </div>
  );
}
