import React, { Suspense, lazy } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import Base from "./components/Layout/Base";
import About from "./components/Home/About";
import SampleRecipes from "./components/Home/SampleRecipes";
import ContentWrapper from "./components/Layout/ContentWrapper";
const waitFor = (Tag) => (props) => <Tag {...props} />;
const RecipeList = lazy(() => import("./components/Recipes/RecipeList"));
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
        <ContentWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch location={location}>
              <Route path="/recipes" component={waitFor(RecipeList)} />
            </Switch>
          </Suspense>
        </ContentWrapper>
      </Base>
    );
  }
};
export default withRouter(Routes);
