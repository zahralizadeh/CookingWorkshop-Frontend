import React from "react";
import Hero from "./Hero";
import { Row, Col } from "reactstrap";
import Sidebar from "../Layout/Sidebar";

const ContentWrapper = (props) => (
  <React.Fragment>
    <Hero />
    <section className="blog_area section-padding">
      <div className="container">
        <Row>
          <Col lg="8" className="mb-5 mb-lg-0">
            <div className="blog_left_sidebar">{props.children}</div>
          </Col>
          <Sidebar />
        </Row>
      </div>
    </section>
  </React.Fragment>
);
export default ContentWrapper;
