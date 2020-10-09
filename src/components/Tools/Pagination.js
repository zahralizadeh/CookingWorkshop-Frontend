import React, { Component } from "react";
import { Link } from "react-router-dom";
class Pagination extends Component {
  isEqual(a, b) {
    if (a === b) return true;
    else return false;
  }
  prepareNav(totalPage, currentPage) {
    let nav = [];
    let item = {};
    let p = 0;
    for (let i = 0; i < 5; i++) {
      if (currentPage < 3) p = i + 1;
      else if (currentPage > totalPage - 2) p = totalPage - 4 + i;
      else p = currentPage - 2 + i;
      item = { page: p, active: this.isEqual(p, currentPage) };
      nav.push(item);
    }
    if (nav[0].page > 1) nav[0].page = "...";
    if (nav[4].page !== totalPage) nav[4].page = "...";
    return nav;
  }
  HandlePageClick = (e) => {
    this.props.onPageSelected(e.currentTarget.innerText);
  };
  render() {
    let currentPage = this.props.currentPage;
    let totalPage = this.props.totalPage;
    let location = this.props.location;
    let values = this.prepareNav(totalPage, currentPage);
    return (
      <nav className="blog-pagination justify-content-center d-flex">
        <ul className="pagination">
          {currentPage === 1 ? null : (
            <li className="page-item">
              <a
                href={location + "?page=" + (currentPage - 1)}
                className="page-link"
                aria-label="Previous"
              >
                <i className="fas fa-angle-left"></i>
              </a>
            </li>
          )}

          {values.map((item, index) => {
            return (
              <li
                className={item.active ? "page-item active" : "page-item"}
                key={index}
              >
                {/* <a
                  href={
                    item.page === "..."
                      ? index === 0
                        ? location + "?page=" + (values[1].page - 1)
                        : location + "?page=" + (values[3].page + 1)
                      : item.page === 1
                      ? location
                      : location + "?page=" + item.page
                  }
                  className="page-link"
                > */}
                <Link
                  to={
                    item.page === "..."
                      ? index === 0
                        ? location + "?page=" + (values[1].page - 1)
                        : location + "?page=" + (values[3].page + 1)
                      : item.page === 1
                      ? location
                      : location + "?page=" + item.page
                  }
                  className="page-link"
                >
                  {/* <span className="page-link" onClick={this.HandlePageClick}> */}
                  {item.page}
                  {/* </span> */}
                </Link>
                {/* </a> */}
              </li>
            );
          })}

          {currentPage === totalPage ? null : (
            <li className="page-item">
              <a
                href={location + "?page=" + (currentPage + 1)}
                className="page-link"
                aria-label="Next"
              >
                <i className="fas fa-angle-right"></i>
              </a>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}
export default Pagination;
