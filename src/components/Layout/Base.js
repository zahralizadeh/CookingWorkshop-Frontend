import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Base = (props) => (
  <React.Fragment>
    {/* Preloader Start */}
    <Header />
    <main>{props.children}</main>
    <Footer />
  </React.Fragment>
);
export default Base;
