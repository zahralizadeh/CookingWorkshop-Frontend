import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <aside className="single_sidebar_widget search_widget">
        <form action="#">
          <div className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Keyword"
                // onFocus="this.placeholder = ''"
                // onBlur="this.placeholder = 'Search Keyword'"
              />
              <div className="input-group-append">
                <button className="btns" type="button">
                  <i className="ti-search"></i>
                </button>
              </div>
            </div>
          </div>
          <button
            className="button rounded-0 primary-bg w-100 btn_1 boxed-btn"
            type="submit"
          >
            Search
          </button>
        </form>
      </aside>
    );
  }
}
export default Search;
