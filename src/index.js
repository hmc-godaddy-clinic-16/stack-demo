import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from 'redux';
import Hello from "./hello.js";
import friends from "./reducers/friends.js";
import {addFriend} from "./actions/friends.js";

const store = createStore(combineReducers({
  friends
}));

store.dispatch(addFriend("HMU"));
store.dispatch(addFriend("GoDaddy"));

console.dir(store.getState());

ReactDOM.render(<Hello name={["HMU", "GoDaddy"]} special={true}/>, document.getElementById("app"));
