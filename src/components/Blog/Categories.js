import React, { Component } from "react";
class Categories extends Component {
  render() {
    return (
      <aside className="single_sidebar_widget post_category_widget">
        <h4 className="widget_title">Category</h4>
        <ul className="list cat-list">
          <li>
            <a href="#" className="d-flex">
              <p>Resaurant food</p>
              <p>(37)</p>
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}
export default Categories;
