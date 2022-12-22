import React from "react";
import Service from "./Service";
import "../../styles/services.css";
function Services() {
  return (
    <>
      <h1 className="medium-header">SERVICES TO PAIR WITH YOUR PARTY</h1>

      <div className="service-container">
        <Service
          service="Catering"
          price="Starting from $50 per person"
          detail="Offers a selection of inspired small plates. Using local ingredients
            and refined techniques, our menu showcases cuisine and cooking
            practices from around the globe."
          image="img-catering-service.jpg"
        />

        <Service
          service="Event Consultation"
          price="Starting from $600"
          detail="Our event consultants assist clients in organizing the details
          required to successfully execute their events to meet their
          expectations. We not only provide help in the interior decoration of
          venues, but also provide catering services, DJs and hosts and
          schedule timing for agenda and programming"
          image="img-event-consultation.jpeg"
        />

        <Service
          service="Photography"
          price="Starting from $100/hour"
          detail="Photo and video services capture your products and events in a very
          unique format. Work with a design firm that works in both mediums to
          showcase you best."
          image="img-photography.jpeg"
        />
      </div>
    </>
  );
}

export default Services;
