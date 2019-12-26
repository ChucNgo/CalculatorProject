import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actions from "../actions";

export const Button = ({ value, style, handleInputData }) => {
  React.useEffect(() => {}, []);

  const onPress = () => handleInputData(value);

  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={styles.textBtn}>{value}</Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = {
  ...actions
};
const ButtonWithMemo = React.memo(Button);
export default connect(null, mapDispatchToProps)(ButtonWithMemo);
