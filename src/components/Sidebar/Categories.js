import React, { Component } from "react";
import fetchRetry from "../Tools/FetchRetry";
class Categories extends Component {
  state = { categories: [] };
  sort_by_key = (arr, key) => {
    arr.sort(function (a, b) {
      var keyA = a[key],
        keyB = b[key];
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    return arr;
  };
  componentDidMount() {
    let url = "http://localhost:8004/api/v1/recipe/categories/";
    var count = 0;
    fetchRetry(url, 1000, 3)
      .then((resp) => resp.json())
      .then((res) => {
        count = res.count / res.results.length + 1;
        this.setState({ categories: res.results });
        // Go for further pages
        url = url + "?page=";
        for (let i = 2; i < count; i++) {
          fetchRetry(url + i, 1000, 3)
            .then((resp) => resp.json())
            .then((res) => {
              var results = this.state.categories.concat(res.results);
              results = this.sort_by_key(results, "title_fa");
              this.setState({
                categories: results,
              });
            });
        }
      });
  }
  render() {
    return (
      <aside className="single_sidebar_widget post_category_widget">
        <h4 className="widget_title">Category</h4>
        <ul className="list cat-list">
          {this.state.categories.map((item, index) => {
            return (
              <li key={index}>
                <a href="#" className="d-flex">
                  <p>{item.title_en}</p>
                  <p>({item.recipes})</p>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    );
  }
}
export default Categories;
