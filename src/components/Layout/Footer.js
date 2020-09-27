import React, { Component } from "react";
import Menu from "../../Menu";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div
          className="footer-section-bg footer-area section-bg"
          data-background="assets/img/gallery/section_bg02.png"
        >
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    {/* <!-- logo --> */}
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="../img/logo/logo2_footer.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-title">
                      <h4>Navigation</h4>
                      <ul>
                        {Menu.map((item, index) => {
                          return (
                            <li key={index}>
                              <a href={item.path}>{item.name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-title">
                      <h4>Useful Links</h4>
                      <ul>
                        <li>
                          <a href="http://www.cheftayebeh.ir/">Chef Tayebeh</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- Instagram --> */}
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-title">
                      <h4>Instagram Feed</h4>
                    </div>
                    <div className="instagram-gellay">
                      <ul className="insta-feed">
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/gallery/instagram1.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/gallery/instagram2.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/gallery/instagram3.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/gallery/instagram4.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/gallery/instagram5.png"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/gallery/instagram6.png"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right">
                    <p>
                      Copyright &copy; All rights reserved | This template is
                      made with{" "}
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      by{" "}
                      <a href="https://zahraalizadeh.web.app/" target="_blank">
                        Zahra Alizadeh
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  {/* <!-- Footer Social --> */}
                  <div className="footer-social f-right">
                    <span>Follow Us</span>
                    <a href="http://instagram.com/cheftayebeh">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="http://t.me/cheftayebeh">
                      <i className="fab fa-telegram-plane"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End--> */}
      </footer>
    );
  }
}
export default Footer;
