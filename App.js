import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AppWithNavigationState, { middleware } from "./src/containers/AppNavigator";
import rootReducer from "./src/reducers";
import createSagaMiddleware from "redux-saga";
import { userWatchers } from "./src/sagas/user";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {
    userState: { 
    users: [],
    user: {},
    isLoading: false,
 },
    storeState: { stores: [], isLoading: false }
  },
  applyMiddleware(middleware, sagaMiddleware)
);
sagaMiddleware.run(userWatchers);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}