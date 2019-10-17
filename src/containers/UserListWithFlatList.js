import React, { Component } from "react";
import UserListItem from "../components/UserListItem";
import {
  ActivityIndicator,
  FlatList,
  View
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../actionCreators/user";

class UserListWithFlatList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  _renderItem = ({ index, item }) => {
    return (
      <UserListItem
        {...this.props}
        id={item.id}
        name={`${item.id} - ${item.name}`}
        username={item.username}
      />
    );
  };

  /*  flat list supporting methods - END */

  render() {
      return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
          {this.props.isLoading ? (
            <ActivityIndicator size="large" color="#00ff80" />
          ) : (
            <FlatList
              data={this.props.users}
              renderItem={this._renderItem}
            />
          )}
        </View>
      );
    }
  }

function mapStateToProps(state) {
  return {
    users: state.userState.users,
    isLoading: state.userState.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  UserListWithFlatList
);