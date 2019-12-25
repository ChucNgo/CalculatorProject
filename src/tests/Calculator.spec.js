import { calculateTotal } from "../constants";

describe("Calculate", () => {
  let expression;
  it("evaluates the expression correctly", () => {
    expression = "1+2-3*4";
    expect(calculateTotal(expression)).toBe(-9);

    expression = "3*11+6/3";
    expect(calculateTotal(expression)).toBe(35);

    expression = "125/5+0.8-7.8";
    expect(calculateTotal(expression)).toBe(18);
  });

  it('evaluates expressions starting with a "-" operator', () => {
    expression = "-100";
    expect(calculateTotal(expression)).toBe(-100);
  });

  it('evaluates longer expressions starting with a "-" operator', () => {
    expression = "-100-10";
    expect(calculateTotal(expression)).toBe(-110);

    expression = "-0.6-0.3+8";
    expect(calculateTotal(expression)).toBe(7.1);
  });

  it('should throw an error for expressions not starting with "-"', () => {
    expression = "*100-10";
    expect(calculateTotal(expression)).toThrow();

    expression = "+5+110-8";
    expect(calculateTotal(expression)).toThrow();

    expression = "/9+23-10";
    expect(calculateTotal(expression)).toThrow();
  });

  it("ignores operators at the end while evaluating the expression correctly", () => {
    expression = "1+2-3*4+";
    expect(calculateTotal(expression)).toBe(-9);
  });

  it("ignores every expression after multiple operators while evaluating the expression correctly", () => {
    expression = "2-3++5+-6*5";
    expect(calculateTotal(expression)).toBe(-1);
  });
});
