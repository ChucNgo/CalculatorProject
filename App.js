import React from "react";
import {} from "react-native";
import MainScreen from "./src/components/Screen";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./src/reducer";

console.disableYellowBox = true;

const combinedReducers = combineReducers({
  reducer
});

const store = createStore(combinedReducers, compose(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
