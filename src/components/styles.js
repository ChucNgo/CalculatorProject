import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../constants";

let screenWidth = Dimensions.get("window").width;

const scaleToDimension = size => {
  return (screenWidth * size) / 375;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContent: {
    flex: 1,
    margin: 16
  },
  topView: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  textResult: {
    color: colors.black,
    fontSize: scaleToDimension(66),
    fontStyle: "normal",
    fontWeight: "400"
  },
  bottomView: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row"
  },

  // Button Style
  containerBtn: {
    flex: 10,
    flexGrow: 1,
    backgroundColor: "yellow"
  },
  btn: {
    alignSelf: "stretch",
    marginBottom: 16,
    backgroundColor: colors.gray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2
  },
  btnNumber: {
    marginRight: 16
  },
  textBtn: {
    color: colors.black,
    fontSize: scaleToDimension(20),
    fontWeight: "300"
  }
});

export default styles;
