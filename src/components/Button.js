import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default Button = props => {
  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity style={[styles.btn, props.style]}>
        <Text style={styles.textBtn}>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
};
