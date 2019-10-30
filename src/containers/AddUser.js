import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput, Alert, Text } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../actionCreators/user";


class AddUser extends Component {
  static navigationOptions= {
    title: "Add",
    headerStyle: {
      backgroundColor: "#00ff80"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center"
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      titleError:null,
      email:''
    }
  }

  handleSubmit = () => {
    let {
      name,
      email
    } = this.state;
    if(!name){
      this.setState({titleError:'Name is required'})
      return;
    }

    let addedUser = {
      name : name,
      email : email,
    }
    this.props.actions.addUser(addedUser);
  }

  componentWillReceiveProps(nextProps) {

    if(this.props.user.email !== nextProps.user.email ||
      this.props.user.name !== nextProps.user.name
    ){
        Alert.alert('Success','User Saved Successfully')
    }
 }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(name) => {
            this.setState({ name,titleError:null })
            if(name.length==0){
              this.setState({ titleError:'Name is required' })
            }
          }}
          value={this.state.name}
          placeholder="Name"
          placeholderTextColor="grey"
        />
        {this.state.titleError && <Text style={{color:'red'}}>Name is required</Text>}
        <TextInput
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          placeholderTextColor="grey"
        />
        <Button
          title="Add"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "stretch",
    backgroundColor: '#ffffff',
  },
});


function mapStateToProps(state) {
  return {
    user : state.userState.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  AddUser
);