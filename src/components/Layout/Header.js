import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Menu from "../../Menu";
class Header extends Component {
  npm;
  render() {
    return (
      <header>
        <div className="header-area header-transparent">
          <div className="main-header  header-sticky">
            <div className="container-fluid">
              <Row className="row align-items-center">
                {/* LOGO */}
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="logo">
                    <a href="index.html">
                      <img src="../img/logo/logo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                {/* end LOGO */}
                <Col xl="10" lg="10" md="10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    {/* <!-- Main-menu --> */}
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          {Menu.map((item, index) => {
                            return (
                              <li key={index}>
                                <a href={item.path}>{item.name}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>
                    </div>
                    {/* end Main menu */}
                  </div>
                </Col>
                <Col>
                  {/* <!-- Mobile Menu --> */}
                  <div className="mobile_menu d-block d-lg-none"></div>
                </Col>
              </Row>
              {/* <div className="row align-items-center"> */}

              {/* </div> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
