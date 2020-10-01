import React, { Component } from "react";
import Hero from "./Hero";
import Posts from "./Posts";
import Search from "./Search";
import { Row, Col } from "reactstrap";
import Categories from "./Categories";
import Recent from "./Recent";
class Blog extends Component {
  state = {
    current_page: 1,
    total_page: 1,
    next_page: null,
    data: [],
  };
  base_url = "http://localhost:8004/api/v1/recipe/";
  page_size = 25;
  getCurrentPage(qs) {
    var pattern = /page=(\d+)/g;
    var page = pattern.exec(qs);

    return page ? parseInt(page[1]) : 1;
  }
  callAPI(url) {
    fetch(url)
      .then((res) => res.json())
      .then((resp) =>
        this.setState({
          total_page: resp.count / this.page_size,
          data: resp.results,
        })
      )
      .catch((error) => console.log(error));
  }
  componentDidMount() {
    let page = this.getCurrentPage(this.props.location.search);
    this.setState({
      current_page: page,
    });
    let url =
      this.base_url + "all_posts/" + (page === 1 ? "" : "?page=" + page);
    this.callAPI(url);
  }
  render() {
    return (
      <React.Fragment>
        <Hero />
        <section className="blog_area section-padding">
          <div className="container">
            <Row>
              <Col lg="8" className="mb-5 mb-lg-0">
                <Posts
                  data={this.state.data}
                  totalPage={this.state.total_page}
                  currentPage={this.state.current_page}
                  location={this.props.location.pathname}
                />
              </Col>
              <Col lg="4">
                <div className="blog_right_sidebar">
                  <Search />
                  <Categories />
                  <Recent />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Blog;
