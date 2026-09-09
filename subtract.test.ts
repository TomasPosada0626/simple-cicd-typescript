/**
 * Unit tests for subtract()
 * Loads the compiled subtract.js so window.subtract is available (same as in the browser).
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  it("subtracts two positive integers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("returns the same number when subtracting 0", () => {
    expect(window.subtract(7, 0)).toBe(7);
  });

  it("returns 0 when both are 0", () => {
    expect(window.subtract(0, 0)).toBe(0);
  });

  it("handles negative numbers", () => {
    expect(window.subtract(-5, -3)).toBe(-2);
  });

  it("returns a negative result when b > a", () => {
    expect(window.subtract(2, 5)).toBe(-3);
  });
});

export {};
