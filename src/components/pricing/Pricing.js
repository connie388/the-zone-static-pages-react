import React from "react";
import Price from "./Price";

const nonMemberPricingData = [
  {
    header: "1-HOUR SESSION",
    subHeader: "(For Non-Members)",
    currency: "CAD",
    amount: "100",
    per: "per Person",
    info: [
      { text: " Perfect for 10-20 people" },
      { text: "Hosting + Coaching" },
      { text: "Rental Room Available (+$100)" },
    ],
  },
  {
    header: "2-HOUR SESSION",
    subHeader: "(For Non-Members)",
    currency: "CAD",
    amount: "180",
    per: "per Person",
    info: [
      { text: "Perfect for 10-40 people" },
      { text: "Hosting + Coaching" },
      { text: "Rental Room Available (+$100)" },
    ],
  },
  {
    header: "3-HOUR SESSION",
    subHeader: "(For Non-Members)",
    currency: "CAD",
    amount: "250",
    per: "per Person",
    info: [
      { text: "Perfect for 10-60 people" },
      { text: "Hosting + Coaching" },
      { text: "Rental Room Available (+$100)" },
    ],
  },
];

const memberPricingData = [
  {
    header: "1-HOUR SESSION",
    subHeader: "(For Members)",
    currency: "CAD",
    amount: "80",
    per: "per Person",
    info: [
      { text: " Perfect for 10-20 people" },
      { text: "Hosting + Coaching" },
      { text: "Rental Room Available (+$100)" },
    ],
  },
  {
    header: "2-HOUR SESSION",
    subHeader: "(For Members)",
    currency: "CAD",
    amount: "150",
    per: "per Person",
    info: [
      { text: "Perfect for 10-40 people" },
      { text: "Hosting + Coaching" },
      { text: "Rental Room Available (+$100)" },
    ],
  },
  {
    header: "3-HOUR SESSION",
    subHeader: "(For Members)",
    currency: "CAD",
    amount: "200",
    per: "per Person",
    info: [
      { text: "Perfect for 10-60 people" },
      { text: "Hosting + Coaching" },
      { text: "Rental Room Available (+$100)" },
    ],
  },
];

const memberInfo = [
  {
    header: "Membership",
    subHeader: "Enjoy perks and discounts all-year round",
    currency: "CAD",
    amount: "100",
    per: "per Person",
    info: [
      { text: "$100 worth of special gifts" },
      { text: "Lucky draw for giftcard" },
      { text: "1 FREE session in birthday month" },
      { text: "Membership is valid for one year from the date of payment" },
    ],
  },
];
const DisplayPricingData = ({ thisPricingData }) => {
  return thisPricingData.map((item, index) => (
    // <div key={`displayPricingData${index}`} className="pricing-container">
    <Price key={index} detail={item} />
    // </div>
  ));
};
function Pricing() {
  return (
    <>
      <div className="pricing pricing-page-size">
        <div className="pricing-container">
          <div className="pricing-title">NON-MEMBERS DEALS</div>

          <div className="pricing-flex-baseline">
            <DisplayPricingData thisPricingData={nonMemberPricingData} />
          </div>
        </div>
      </div>
      <div className="member-pricing pricing-page-size">
        <div className="pricing-container">
          <br />
          <div className="pricing-title">MEMBERS DEALS</div>

          <div className="pricing-flex-baseline">
            <DisplayPricingData thisPricingData={memberPricingData} />
          </div>
        </div>
      </div>
      <div className="member-detail pricing-page-size">
        <div className="pricing-container">
          <div className="pricing-title">BE A MEMBER</div>
          <div>
            <div className="pricing-flex-baseline">
              <div className="member-container">
                <p>
                  New members will receive $100 worth of gifts and a chance to
                  win an airsoft gun! Members can also enjoy 1 free game session
                  during their birthday month.
                </p>
                <br />
                <p>(Membership status should be renewed annually)</p>
              </div>

              <DisplayPricingData thisPricingData={memberInfo} />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
