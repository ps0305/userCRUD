import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import React from "react";

import UserDetail from "./UserDetail";
import AddUser from "./AddUser";
import UserListWithFlatList from "./UserListWithFlatList";


const ListStack = createStackNavigator(
  {
    List: {
      screen: UserListWithFlatList
    },
    Detail: {
      screen: UserDetail
    }
  },
  {
    initialRouteName: "List",
    navigationOptions: {
      title: "User Manager",
      headerStyle: {
        backgroundColor: "#00ff80"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);

const AddStack = createStackNavigator(
  {
    Add: {
      screen: AddUser
    }
  },
  {
    initialRouteName: "Add",
    navigationOptions: {
      title: "Manage",
      headerStyle: {
        backgroundColor: "#00ff80"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);


export const AppNavigator = createBottomTabNavigator(
  {
    List: ListStack,
    Add: AddStack
  },
);

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navState
);
const addListener = createReduxContainer("root");

class App extends React.Component {
  render() {
    return (
      <AppNavigator
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.navState,
          addListener
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  navState: state.navState
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;