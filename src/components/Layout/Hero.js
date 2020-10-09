import React, { Component } from "react";
import { Row, Col } from "reactstrap";
class Hero extends Component {
  render() {
    return (
      <div className="slider-area ">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <Row>
              <Col>
                <div className="hero-cap hero-cap2">
                  <h2>Recipes</h2>
                  <h4>Cooking is a love story.</h4>
                  <h4>
                    You need to fall in love with ingredients and then of people
                    who cook them.
                  </h4>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
