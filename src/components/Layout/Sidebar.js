import React, { Component } from "react";
import { Col } from "reactstrap";
import Search from "../Sidebar/Search";
import Categories from "../Sidebar/Categories";
// import Recent from "../Sidebar/Recent";

class Sidebar extends Component {
  render() {
    return (
      <Col lg="4">
        <div className="blog_right_sidebar">
          <Search />
          <Categories />
          {/* <Recent /> */}
        </div>
      </Col>
    );
  }
}
export default Sidebar;
