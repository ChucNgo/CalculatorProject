import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import Button from "./Button";
import styles from "./styles";
import { keypadLeft, keypadRight } from "../constants";
import { connect } from "react-redux";
export const MainScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainContent}>
          <View style={styles.topView}>
            <Text style={styles.textResult}>{props.total}</Text>
          </View>
          <View style={styles.bottomView}>
            <View style={{ flexGrow: 4 }}>
              {keypadLeft.map((element, index) => (
                <View style={styles.rowItemNumber}>
                  {element.map(key => (
                    <Button style={styles.btnNumber} value={key} />
                  ))}
                </View>
              ))}
            </View>
            <View style={{ flex: 1 }}>
              {keypadRight.map(key => (
                <Button value={key} />
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const mapStateToProps = state => ({
  total: state.reducer.total
});
export default connect(mapStateToProps)(MainScreen);
