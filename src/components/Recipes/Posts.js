import React, { Component } from "react";
class Posts extends Component {
  render() {
    let data = this.props.data;

    return data.map((recipe, index) => {
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
    });
  }
}
export default Posts;
