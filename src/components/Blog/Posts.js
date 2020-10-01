import React, { Component } from "react";
import SampleRecipes from "../Home/SampleRecipes";
class Posts extends Component {
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

  render() {
    let data = this.props.data;
    var currentPage = this.props.currentPage;
    var totalPage = this.props.totalPage;
    let nav = this.prepareNav(totalPage, currentPage);
    let location = this.props.location;
    return (
      <div className="blog_left_sidebar">
        {data.map((recipe, index) => {
          return (
            <article className="blog_item" key={index}>
              <div className="blog_item_img">
                <img
                  className="blog_post_img card-img rounded-0"
                  src={recipe.steps[0].image}
                  alt={recipe.title_en}
                />
                <a href="#" className="blog_item_date">
                  <h3>15</h3>
                  <p>Jan</p>
                  <p>2020</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="blog_details.html">
                  <h2 className="blog-head">{recipe.title_en}</h2>
                </a>
                <ul className="blog-info-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-user"></i> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments"></i> 03 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          );
        })}
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

            {nav.map((item, index) => {
              return (
                <li
                  className={item.active ? "page-item active" : "page-item"}
                  key={index}
                >
                  <a
                    href={
                      item.page === "..."
                        ? index === 0
                          ? location + "?page=" + (nav[1].page - 1)
                          : location + "?page=" + (nav[3].page + 1)
                        : item.page === 1
                        ? location
                        : location + "?page=" + item.page
                    }
                    className="page-link"
                  >
                    {item.page}
                  </a>
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
      </div>
    );
  }
}
export default Posts;
