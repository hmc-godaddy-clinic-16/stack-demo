import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from 'redux';
import {Provider} from "react-redux";
import App from "./components/app.js";
import friends from "./reducers/friends.js";

const store = createStore(combineReducers({
  friends
}), {
  friends: ["HMU", "GoDaddy"]
},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
);
