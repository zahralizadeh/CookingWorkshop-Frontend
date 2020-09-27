import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SampleRecipes extends Component {
  render() {
    return (
      <section className="blogs-area section-padding30">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg="6">
              {/* <!-- Section Title --> */}
              <div className="section-title text-center mb-70">
                <span>Our New Blog News</span>
                <h2>Our Recnet News</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="6">
              <div className="single-blogs mb-100">
                <div className="blog-img">
                  <img
                    className="blog-random-img"
                    src="https://hqdsba.dm1.livefilestore.com/y2pjjNeuAHGQkde4j6jDvQXSaraK-jfuXz6LQ5mDUIHobor-aO63KKj_Fz5bfuFFk9r_xGBmPBS8yg63oSOVK32t4Isa5-acSIVM-f_j9ivGkE/tahchin-e-morgh-b.jpg?psid=1"
                    alt=""
                  />
                </div>
                <div className="blog-cap">
                  <span className="color1">23 Dec, 2020</span>
                  <h4>
                    <a href="blog_details.html">
                      Addiction When Food Plate Becomes
                    </a>
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="single-blogs mb-100">
                <div className="blog-img">
                  <img
                    className="blog-random-img"
                    src="https://i.postimg.cc/3JNLnNMH/IMG-3855.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-cap">
                  <span className="color1">23 Dec, 2020</span>
                  <h4>
                    <a href="blog_details.html">
                      Addiction When Food Plate Becomes
                    </a>
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="single-blogs mb-100">
                <div className="blog-img">
                  <img
                    className="blog-random-img"
                    src="https://i.postimg.cc/3JNLnNMH/IMG-3855.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-cap">
                  <span className="color1">23 Dec, 2020</span>
                  <h4>
                    <a href="blog_details.html">
                      Addiction When Food Plate Becomes
                    </a>
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
export default SampleRecipes;
