import React, { useState } from "react";
import { Route, Switch, Router, Redirect } from "react-router-dom";

import history from "./history";

import Home from "./components/pages/Home";
import Navigation from "./components/navigation/Navigation";
import PageWrapper from "./components/pages/PageWrapper";
import Counter from "./apps/Counter/Counter";

function App() {
  const [dynamicRoute, setDynamicRoute] = useState([]);

  const handleDynamicData = data => {
    setDynamicRoute(data);
  };

  return (
    <Router history={history}>
      <div className="App">
        <Navigation dynamic={handleDynamicData} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />

          {/*Static Routing*/}
          {/* <Route exact path="/page-one" component={PageOne} />
          <Route exact path="/page-two" component={PageTwo} />
  <Route exact path="/page-three" component={PageThree} /> */}
          {/*Dynamic Routing */}
          <Route exact path="/page/:pageId" component={PageWrapper} />
          {dynamicRoute.map((menu, index) => {
            return (
              <Route
                key={index}
                exact
                path={menu.url}
                render={routeProps => (
                  <div>
                    <h1>{menu.name}</h1>
                    <img
                      src={`https://demob2b2c.avetti.io/preview/store${menu.image}`}
                      alt={menu.url.replace("/", "")}
                    />
                  </div>
                )}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
