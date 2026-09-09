/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies two positive integers", () => {
    expect(window.multiply(4, 3)).toBe(12);
  });

  it("returns 0 when multiplying by 0", () => {
    expect(window.multiply(5, 0)).toBe(0);
  });

  it("handles negative numbers", () => {
    expect(window.multiply(-2, 3)).toBe(-6);
  });

  it("returns a positive result when multiplying two negatives", () => {
    expect(window.multiply(-2, -3)).toBe(6);
  });
});

export {};
