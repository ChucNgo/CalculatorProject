import reducer from "../reducer";
import { types } from "../constants";

describe("Reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      expression: "",
      total: 0
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle CALCULATE", () => {
    let expected = {
      expression: "3*6",
      total: 18
    };
    let action = {
      type: types.CALCULATE,
      data: "3*6"
    };
    expect(reducer(undefined, action)).toEqual(expected);

    expected = {
      expression: "0*",
      total: 0
    };
    action = {
      type: types.CALCULATE,
      data: "*"
    };
    expect(reducer(undefined, action)).toEqual(expected);

    expected = {
      expression: "0/",
      total: 0
    };
    action = {
      type: types.CALCULATE,
      data: "/"
    };
    expect(reducer(undefined, action)).toEqual(expected);

    expected = {
      expression: "0+",
      total: 0
    };
    action = {
      type: types.CALCULATE,
      data: "+"
    };
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it("should handle CLEAR", () => {
    const expected = {
      expression: "",
      total: 0
    };
    const initialState = {
      expression: "4*5",
      total: 25
    };
    const action = {
      type: types.CLEAR
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  it("should handle SET_RESULT", () => {
    const expected = {
      expression: "",
      total: 120
    };
    const initialState = {
      expression: "4*5*6",
      total: 120
    };
    const action = {
      type: types.SET_RESULT
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
