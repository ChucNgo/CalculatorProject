import React from "react";
import { View, Text, StatusBar, SafeAreaView, FlatList } from "react-native";
import Button from "./Button";
import styles from "./styles";

const dataLeft = [
  {
    id: 1,
    value: "7"
  },
  {
    id: 2,
    value: "8"
  },
  {
    id: 3,
    value: "9"
  },
  {
    id: 4,
    value: "4"
  },
  {
    id: 5,
    value: "5"
  },
  {
    id: 6,
    value: "6"
  },
  {
    id: 7,
    value: "1"
  },
  {
    id: 8,
    value: "2"
  },
  {
    id: 9,
    value: "3"
  },
  {
    id: 10,
    value: "C"
  },
  {
    id: 11,
    value: "0"
  },
  {
    id: 12,
    value: "."
  }
];

const dataRight = [
  {
    id: 1,
    value: "/"
  },
  {
    id: 2,
    value: "*"
  },
  {
    id: 3,
    value: "+"
  },
  {
    id: 4,
    value: "-"
  },
  {
    id: 5,
    value: "="
  }
];

export default MainScreen = () => {
  const renderItemNumber = ({ item }) => {
    return <Button style={styles.btnNumber} value={item.value} />;
  };
  const renderItemMath = ({ item }) => {
    return <Button value={item.value} />;
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
            style={{ flex: 3, flexGrow: 3, backgroundColor: "pink" }}
            data={dataLeft}
            numColumns={3}
            renderItem={renderItemNumber}
            scrollEnabled={false}
            keyExtractor={item => item.id}
          />
          <FlatList
            style={{ flex: 1 }}
            data={dataRight}
            numColumns={1}
            renderItem={renderItemMath}
            scrollEnabled={false}
            keyExtractor={item => item.id}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
