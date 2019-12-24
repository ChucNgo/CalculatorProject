import React from "react";
import { View, Text, StatusBar, SafeAreaView, FlatList } from "react-native";
import Button from "./Button";
import styles from "./styles";
import { dataLeft, dataRight } from "../constants";
export default MainScreen = () => {
  const renderItemNumber = ({ item }) => (
    <Button
      style={styles.btnNumber}
      value={item}
      onPress={() => handlePress(item)}
    />
  );
  const renderItemOperator = ({ item }) => (
    <Button
      style={styles.btnOperator}
      value={item}
      onPress={() => handlePress(item)}
    />
  );

  const handlePress = value => {
    if (!isNaN(value) || value == ".") {
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainContent}>
        <View style={styles.topView}>
          <Text style={styles.textResult}>123</Text>
        </View>
        <View style={styles.bottomView}>
          <FlatList
            style={{ flexGrow: 4 }}
            data={dataLeft}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={renderItemNumber}
            scrollEnabled={false}
            keyExtractor={item => item.id}
          />
          <FlatList
            style={{ flex: 1 }}
            data={dataRight}
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
