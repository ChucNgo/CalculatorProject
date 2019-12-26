import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../constants";

let screenWidth = Dimensions.get("window").width;
const scaleToDimension = size => (screenWidth * size) / 375;

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContent: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16
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
  rowItemNumber: { flexDirection: "row", flex: 1 },

  // Button Style
  btn: {
    flex: 1,
    flexGrow: 1,
    marginTop: 16,
    backgroundColor: colors.gray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
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
    fontSize: scaleToDimension(24),
    fontWeight: "400"
  }
});
