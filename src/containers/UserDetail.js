import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../actionCreators/user";


class UserDetail extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `User Detail for ${navigation.state.params.id}`
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    let { id } = this.props.navigation.state.params;
    this.props.actions.getUser(id);
  }

  renderUser() {
    const { navigation } = this.props;
    const { user } = this.props;
    return (<View>
              <Text style={styles.title}>{user.id} - {user.name}</Text>
            </View>)
  }

  render() {

    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          <ActivityIndicator size="large" color="#00ff80" />
        ) : (
            this.renderUser()
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    padding: 10
  },
  title: {
    fontSize: 24,
    padding: 10
  }
});


function mapStateToProps(state) {
  return {
    user: state.userState.user,
    isLoading: state.userState.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  UserDetail
);
