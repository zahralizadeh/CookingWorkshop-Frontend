import React, { Component } from "react";
import { Row, Col } from "reactstrap";
class About extends Component {
  render() {
    return (
      <div className="about-area3 pt-180 pb-170 about-section-bg section-bg">
        <div className="container">
          {/* <div className="row justify-content-end"> */}
          {/* <div className="col-xl-6 col-lg-6 col-md-9 col-sm-11"> */}
          <Row className="justify-content-end">
            <Col xl="7" lg="7" md="7" sm="11">
              {/* <!-- Section Title --> */}
              <div className="section-title section-title2 mb-40">
                <span>Guildline for beginners</span>
                <h2>Cook professionally!</h2>
                <p>
                  Cooking is not just about eating and being full.
                  <br />
                  Let's cook with love and improve our mood with good nutrition
                  and positive energy.
                </p>
              </div>
              {/* <!--Hero form --> */}
              <form action="#" className="search-box">
                <div className="input-form">
                  <input type="text" placeholder="Search a Recipe ..." />
                </div>
                <div className="search-form">
                  <button>GO</button>
                </div>
              </form>
            </Col>
          </Row>
          {/* </div>
            </div> */}
        </div>
      </div>
    );
  }
}
export default About;
