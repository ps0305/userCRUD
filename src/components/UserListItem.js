import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

} from "react-native";

class UserListItem extends React.PureComponent {
  
  render() {
    let {
      id,
      name,
      navigation,
      username,
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          console.log("Navigating to detail for id ", id);
          navigation.navigate("Detail", { id });
        }}
      >
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <View style={styles.infoContainer}>
              <Text
                style={[styles.name, { flexShrink: 1, overflow: "hidden" }]}
              >
                {name}
              </Text>
            </View>
            <View style={styles.username}>
              <Text style={{ color: "#fff", marginRight: 4 }}>{username || "NA"}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    marginRight: 15,
    marginLeft: 15,
    height: 150
  },
  name: {
    color: "black",
    marginRight: 8,
    marginLeft: 8,
    fontSize: 12
  },
  username: {
    borderRadius: 5,
    backgroundColor: "#0040ff",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    marginLeft: 10
  },
});
export default UserListItem;