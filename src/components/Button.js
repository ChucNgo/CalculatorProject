import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Button = ({ value, style, onPress }) => {
  React.useEffect(() => {}, []);

  console.log("render", value);

  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
        <Text style={styles.textBtn}>{value}</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }} />
    </View>
  );
};

export default ButtonWithMemo = React.memo(Button);
