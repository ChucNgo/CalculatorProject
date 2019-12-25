import React from "react";
import { View, Text, StatusBar, SafeAreaView, FlatList } from "react-native";
import Button from "./Button";
import styles from "./styles";
import { keypadLeft, keypadRight } from "../constants";
import { connect } from "react-redux";
export const MainScreen = props => {
  const renderItemNumber = ({ item }) => (
    <Button style={styles.btnNumber} value={item} />
  );
  const renderItemOperator = ({ item }) => (
    <Button style={styles.btnOperator} value={item} />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContent}>
        <View style={styles.topView}>
          <Text style={styles.textResult}>{props.total}</Text>
        </View>
        <View style={styles.bottomView}>
          <FlatList
            style={{ flexGrow: 4 }}
            data={keypadLeft}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={renderItemNumber}
            scrollEnabled={false}
            keyExtractor={(_, index) => index}
          />
          <FlatList
            style={{ flex: 1 }}
            data={keypadRight}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            renderItem={renderItemOperator}
            scrollEnabled={false}
            keyExtractor={(_, index) => index}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
const mapStateToProps = state => ({
  total: state.reducer.total
});
export default connect(mapStateToProps)(MainScreen);
