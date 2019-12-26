import { types } from "../constants";
import { calculate, clear, setResult, handleInputData } from "../actions";
import mockStore from "redux-mock-store";

describe("handle triggered actions", () => {
  it("creates a HANDLE INPUT DATA action", () => {
    const store = mockStore({ expression: "1+2-3*4", total: 0 });
    store.dispatch(handleInputData("="));
    expect(store.getActions()).toMatchSnapshot();

    store.dispatch(handleInputData("C"));
    expect(store.getActions()).toMatchSnapshot();

    store.dispatch(handleInputData("5"));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("creates a CLEAR action", () => {
    expect(clear()).toEqual({
      type: types.CLEAR
    });
    expect(clear()).toMatchSnapshot();
  });

  it("creates a CALCULATE action", () => {
    expect(calculate(5)).toEqual({
      type: types.CALCULATE,
      data: 5
    });
    expect(calculate(5)).toMatchSnapshot();
  });

  it("creates a SET_RESULT action", () => {
    expect(setResult()).toEqual({
      type: types.SET_RESULT
    });
    expect(setResult()).toMatchSnapshot();
  });
});
