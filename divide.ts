/**
 * Returns the quotient of two numbers (a / b).
 * Throws an Error when dividing by zero instead of returning
 * null/NaN, so callers cannot silently propagate an invalid result.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Expose to window so the HTML script can call it
(window as unknown as { divide: typeof divide }).divide = divide;
