import React, { Component } from "react";
import Hero from "./Hero";
import Posts from "./Posts";
import Search from "./Search";
import { Row, Col } from "reactstrap";
import Categories from "./Categories";
import Recent from "./Recent";
class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <section className="blog_area section-padding">
          <div className="container">
            <Row>
              <Col lg="8" className="mb-5 mb-lg-0">
                <Posts />
              </Col>
              <Col lg="4">
                <div className="blog_right_sidebar">
                  <Search />
                  <Categories />
                  <Recent />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Blog;
