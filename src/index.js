import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from 'redux';
import {Provider} from "react-redux";
import App from "./components/app.js";
import friends from "./reducers/friends.js";
import {addFriend} from "./actions/friends.js";

const store = createStore(combineReducers({
  friends
}));

store.dispatch(addFriend("HMU"));
store.dispatch(addFriend("GoDaddy"));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
);
