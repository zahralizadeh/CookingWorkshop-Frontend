import React, { Component } from "react";

class Recent extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    let url = "http://localhost:8004/api/v1/recipe/recent_posts/";
    fetch(url)
      .then((res) => res.json())
      .then((resp) => this.setState({ data: resp.results }))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <aside className="single_sidebar_widget popular_post_widget">
        <h3 className="widget_title">Recent Post</h3>
        <div className="media post_item">
          <img src="assets/img/post/post_1.png" alt="post" />
          <div className="media-body">
            <a href="blog_details.html">
              <h3>From life was you fish...</h3>
            </a>
            <p>January 12, 2019</p>
          </div>
        </div>
        <div className="media post_item">
          <img src="assets/img/post/post_2.png" alt="post" />
          <div className="media-body">
            <a href="blog_details.html">
              <h3>The Amazing Hubble</h3>
            </a>
            <p>02 Hours ago</p>
          </div>
        </div>
      </aside>
    );
  }
}

export default Recent;
