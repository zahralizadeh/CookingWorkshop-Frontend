import React, { Component } from "react";
import Posts from "./Posts";
import Pagination from "../Tools/Pagination";

const getCurrentPage = (qs) => {
  var pattern = /page=(\d+)/g;
  var page = pattern.exec(qs);
  return page ? parseInt(page[1]) : 1;
};

const getUrl = (page) => {
  let base_url = "http://localhost:8004/api/v1/recipe/";
  return base_url + "all_posts/" + (page === 1 || !page ? "" : "?page=" + page);
};

class RecipeList extends Component {
  state = {
    current_page: 1,
    total_page: 1,
    next_page: null,
    data: [],
    page_url: null,
    loading: false,
  };
  page_size = 25;

  fetchRecipes(url) {
    this.setState({ loading: true });
    fetch(url)
      .then((res) => res.json())
      .then((resp) =>
        this.setState({
          total_page: resp.count / this.page_size,
          data: resp.results,
          loading: false,
        })
      )
      .catch((error) => console.log(error));
  }
  componentDidMount() {
    let page = getCurrentPage(this.props.location.search);
    this.setState({
      current_page: page ? page : 1,
    });
    let url = getUrl(page);
    this.fetchRecipes(url);
  }
  onPageSelected = (page) => {
    let url = getUrl(page);
    this.setState({
      current_page: parseInt(page),
    });
    this.fetchRecipes(url);
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          "loading"
        ) : (
          <React.Fragment>
            <Posts
              data={this.state.data}
              totalPage={this.state.total_page}
              currentPage={this.state.current_page}
              location={this.props.location.pathname}
            />
            <Pagination
              totalPage={this.state.total_page}
              currentPage={this.state.current_page}
              location={this.props.location.pathname}
              onPageSelected={this.onPageSelected}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default RecipeList;
