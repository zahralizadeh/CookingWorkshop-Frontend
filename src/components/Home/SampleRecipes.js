import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SampleRecipes extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    let url = "http://localhost:8004/api/v1/recipe/recent_post/";
    fetch(url)
      .then((res) => res.json())
      .then((resp) => this.setState({ data: resp.results }))
      .catch((error) => console.log(error));
  }
  render() {
    var date;
    return (
      <section className="blogs-area section-padding30">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg="6">
              {/* <!-- Section Title --> */}
              <div className="section-title text-center mb-70">
                <span>Our New Blog News</span>
                <h2>Recent Recipes</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {this.state.data.map((item) => {
              return (
                <Col lg="4" md="6">
                  <div className="single-blogs mb-100">
                    <div className="blog-img">
                      <img
                        className="blog-random-img"
                        src={item.steps[0].image}
                        alt=""
                      />
                    </div>
                    <div className="blog-cap">
                      <span className="color1">
                        {(date = new Date(item.published_date).toDateString())}
                      </span>
                      <h4>
                        <a href="blog_details.html">{item.title_en}</a>
                      </h4>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    );
  }
}
export default SampleRecipes;
