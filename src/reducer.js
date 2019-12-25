import { types, evaluateExpression, calculateTotal } from "./constants";
const initialState = {
  expression: "",
  total: 0
};
export default function(state = initialState, action = {}) {
  switch (action.type) {
    case types.CALCULATE:
      let expression = evaluateExpression(state.expression, action.data);
      let result = calculateTotal(expression);
      return {
        ...state,
        expression,
        total: result || state.total
      };
    case types.SET_RESULT:
      return {
        ...state,
        expression: "",
        total:
          calculateTotal(state.expression) || state.expression || state.total
      };
    case types.CLEAR:
      return {
        ...state,
        expression: "",
        total: 0
      };
    default:
      return state;
  }
}
