import React, { Suspense, lazy } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import Base from "./components/Layout/Base";
import About from "./components/Home/About";
import SampleRecipes from "./components/Home/SampleRecipes";
const waitFor = (Tag) => (props) => <Tag {...props} />;
const Blog = lazy(() => import("./components/Blog/Blog"));
const Routes = ({ location }) => {
  //   const currentKey = location.pathname.split("/")[1] || "/";
  if (location.pathname === "/") {
    return (
      <Base>
        <Route path="/">
          <About />
          <SampleRecipes />
        </Route>
      </Base>
    );
  } else {
    return (
      <Base>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch location={location}>
              <Route path="/recipes" component={waitFor(Blog)} />
            </Switch>
          </Suspense>
        </div>
      </Base>
    );
  }
};
export default withRouter(Routes);
