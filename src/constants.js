export const colors = {
  black: "#000000",
  gray: "#DDDDDD"
};
export const keypadLeft = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "C",
  "0",
  "."
];
export const keypadRight = ["/", "*", "+", "-", "="];
export const types = {
  CALCULATE: "CALCULATE",
  CLEAR: "CLEAR",
  SET_RESULT: "SET_RESULT"
};

export const evaluateExpression = (expression, data) => {
  if (/[\d]*[-+*/.]$/.exec(expression) && /[-+*/.]/.exec(data)) {
    expression = expression.slice(0, expression.length - 1);
  }
  return `${expression + data}`;
};

export const calculateTotal = expression => {
  const matched = new RegExp(
    "([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*"
  ).exec(expression);
  if (!matched) {
    return 0;
  }
  if (/^[*+\/]/.test(expression)) {
    return () => {
      throw new Error("Cannot start the expression with invalid operators");
    };
  }
  return eval(matched[0]);
};
