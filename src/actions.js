import { types } from "./constants";

export const handleInputData = value => dispatch => {
  switch (value) {
    case "C":
      dispatch(clear());
      break;
    case "=":
      dispatch(setResult());
      break;
    default:
      dispatch(calculate(value));
      break;
  }
};

export const calculate = data => ({
  type: types.CALCULATE,
  data
});

export const clear = () => ({
  type: types.CLEAR
});

export const setResult = () => ({
  type: types.SET_RESULT
});
