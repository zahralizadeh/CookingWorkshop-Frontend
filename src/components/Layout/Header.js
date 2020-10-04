import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Menu from "../../Menu";
class Header extends Component {
  state = {
    binders: [],
  };
  componentDidMount() {
    let url = "http://localhost:8004/api/v1/recipe/binders/";
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => {
        this.setState({ binders: res.results });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <header>
        <div className="header-area header-transparent">
          <div className="main-header  header-sticky">
            <div className="container-fluid">
              {/* <div className="row align-items-center"> */}
              <Row className="row align-items-center">
                {/* LOGO */}
                <Col xl="1" lg="1" md="1">
                  <div className="logo">
                    <a href="index.html">
                      <img src="../img/logo/logo11.png" alt="logo" />
                    </a>
                  </div>
                </Col>
                {/* end LOGO */}
                <Col xl="11" lg="11" md="11">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    {/* <!-- Main-menu --> */}
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          {/* Categories menu */}
                          {this.state.binders.map((item, index) => {
                            return (
                              <li key={"cat" + index}>
                                <a href={item.title_en}>{item.title_en}</a>
                                <ul
                                  className={
                                    item.categories.length > 20
                                      ? "multicolumn quadruplecol"
                                      : item.categories.length > 10
                                      ? "multicolumn triplecol"
                                      : "multicolumn doublecol"
                                  }
                                >
                                  {item.categories.map((cat, i) => {
                                    return (
                                      <li key={"subcat" + i}>
                                        <a href="blog.html">{cat.title_en}</a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Col>
              </Row>
              {/* </div> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
