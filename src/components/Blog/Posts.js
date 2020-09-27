import React, { Component } from "react";
class Posts extends Component {
  render() {
    return (
      <div className="blog_left_sidebar">
        <article className="blog_item">
          <div className="blog_item_img">
            <img
              className="blog_post_img card-img rounded-0"
              src="https://i.postimg.cc/x1xscyZ5/IMG-1541.jpg"
              alt=""
            />
            <a href="#" className="blog_item_date">
              <h3>15</h3>
              <p>Jan</p>
            </a>
          </div>
          <div className="blog_details">
            <a className="d-inline-block" href="blog_details.html">
              <h2 className="blog-head">
                Google inks pact for new 35-storey office
              </h2>
            </a>
            <p>
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </p>
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
        <nav className="blog-pagination justify-content-center d-flex">
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" aria-label="Previous">
                <i className="ti-angle-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link" aria-label="Next">
                <i className="ti-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Posts;
