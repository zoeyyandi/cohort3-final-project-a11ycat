import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "./features/app/app.container";
import { Route, Router } from "react-router-dom";
import { MapPageContainer } from "./features/map-page/map-page.container";
import { LocationRatingContainer } from "./features/location-rating/location-rating.container";
import "./index.css";
import reducer from "./reducers";
import { Header } from './ui-kit/header';
import createHistory from "history/createBrowserHistory"

export const history = createHistory();

if (process.env.NODE_ENV === "development") {
  const a11y = require("react-a11y").default;
  a11y(React, ReactDOM, {
    rules: {
      "button-role-space": "warn",
      "hidden-uses-tabindex": "warn",
      "img-uses-alt": "warn",
      "label-uses-for": "warn",
      "mouse-events-map-to-key-events": "warn",
      "no-access-key": "warn",
      "no-hash-ref": "warn",
      "no-unsupported-elements-use-aria": "warn",
      "onclick-uses-role": "warn",
      "onclick-uses-tabindex": "warn",
      "redundant-alt": "warn",
      "tabindex-uses-button": "warn",
      "use-onblur-not-onchange": "warn",
      "valid-aria-role": "warn"
    }
  });
}

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <div>
      <Header headerText={'A11yCatz'} />
      <Route exact path="/Map" component={MapPageContainer} />
      <Route exact path="/RateLocation" component={LocationRatingContainer} />
      <Route exact path="/" component={AppContainer} />
    </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
