import React from "react";
import "../../styles/pages.css";
function Career() {
  return (
    <div>
      <div className="career align-title-right-container full-screen ">
        <div className="container-align">
          <h1 className="big-header">JOIN THE TEAM</h1>
          <div className="big-description">
            If you love to stay active and are usually smiling, come work with
            us! At the Zone you’re not just an employee, but an essential team
            member, facilitating fun for our guests and enjoying yourself along
            the way.
          </div>
        </div>
      </div>
      <div>
        <div className="standard-size-container align-title-right-container">
          <div className="flex-baseline">
            <div className="paragraph">
              <div className="flex-center-container ">
                <span className="medium-header">WORK WITH THE ZONE</span>
                If you PLAY here, why not work here! If you are outgoing and
                enjoy working with people, you'll love working here. We are
                always looking for fun, friendly team members to join our team.
                At the Zone you are not just an employee, but an essential team
                member, facilitating an exceptional guest experience while
                having FUN along the way! The best way to apply is to stop in
                and ask to speak with a manager. Please no phone calls!
              </div>
            </div>

            <div className="space-around-container">
              <img src={require(`./images/img-team.jpeg`)} alt="teamwork" />
            </div>
          </div>
        </div>
        <div className="apply-job-contact">
          <hr className="contact-hr apply-job-special-color" />
          <div className="flex-baseline">
            <div className="b-container-grid">
              <span className="medium-header">APPLY TODAY </span>
            </div>
            <div className="career-container-grid">
              <div className="standard-header-with-no-margin">
                Call for Details
              </div>
              <div className="apply-job-special-color">
                <i
                  className="apply-job-special-color fa fa-volume-control-phone"
                  aria-hidden="true"
                ></i>
                1-800-telephone
              </div>
            </div>
            <div className="career-container-grid">
              <div className="standard-header-with-no-margin">
                Request Information
              </div>
              <div className="apply-job-special-color">
                <i className="fa fa-envelope" aria-hidden="true" />
                the-zone@gmail.com
              </div>
            </div>
            <div className="career-container-grid">
              <div className="standard-header-with-no-margin">Drop By</div>
              <div className="flex-baseline">
                <div>
                  <i
                    className="apply-job-special-color fa fa-map-marker"
                    aria-hidden="true"
                  />
                </div>

                <a
                  className="google-map"
                  href="https://www.google.com/maps/dir//43.8054616,-79.3075679/@43.8074128,-79.3017743,15z"
                >
                  <div className="apply-job-special-color">
                    <p>88 The Best Avenue,</p>
                    <p>Markham, Ontario,</p>
                    <p>Canada</p>
                    <p>M7I 9P8</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <hr className="contact-hr apply-job-special-color" />
        </div>
      </div>
    </div>
  );
}

export default Career;
