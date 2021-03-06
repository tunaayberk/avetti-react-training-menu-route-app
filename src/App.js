import React, { useState } from "react";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import history from "./history";

import Home from "./components/pages/Home";
import Navigation from "./components/navigation/Navigation";
import PreFetchNavigation from "./components/navigation/PreFetchNavigation";

import PageWrapper from "./components/pages/PageWrapper";
import Counter from "./apps/Counter/Counter";
import CategoryPage from "./components/categorypage/CategoryPage";
import { categoryRequest } from "./redux/actions/categoryActions";
import NewCategoryPage from "./components/newCategoryPage/NewCategoryPage";
import SagaCategoryPage from "./components/newCategoryPage/SagaCategoryPage";

function App() {
  const dispatch = useDispatch();

  const [dynamicRoute, setDynamicRoute] = useState([]);

  const handleDynamicData = (data) => {
    setDynamicRoute(data);
  };

  return (
    <Router history={history}>
      <div className="App">
        <PreFetchNavigation dynamic={handleDynamicData} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />

          {/*Static Routing*/}
          {/* <Route exact path="/page-one" component={PageOne} />
          <Route exact path="/page-two" component={PageTwo} />
  <Route exact path="/page-three" component={PageThree} /> */}
          {/*Dynamic Routing */}
          <Route exact path="/page/:pageId" component={PageWrapper} />
          <Route exact path="/shop/:shopId" component={NewCategoryPage} />
          <Route exact path="/saga/:shopId" component={SagaCategoryPage} />
          {/* dynamicRoute.map((menu, index) => {
            dispatch(categoryRequest(menu.cid));
            return (
              <Route
                key={index}
                exact
                path={menu.url}
                render={routeProps => <CategoryPage menu={menu} />}
              />
            );
          }) */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
