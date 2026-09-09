/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive integers", () => {
    expect(window.divide(6, 3)).toBe(2);
  });

  it("returns 0 when dividing 0 by a non-zero number", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("handles negative numbers", () => {
    expect(window.divide(-6, 3)).toBe(-2);
  });

  it("returns a positive result when dividing two negatives", () => {
    expect(window.divide(-6, -3)).toBe(2);
  });

  it("throws an error when dividing by zero", () => {
    expect(() => window.divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});

export {};
