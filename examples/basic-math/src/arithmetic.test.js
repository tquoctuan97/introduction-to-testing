import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 7)).toBe(12);
    expect(add(100, 200)).toBe(300);
  });

  it('should add negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
    expect(add(-5, 3)).toBe(-2);
    expect(add(5, -3)).toBe(2);
  });

  it('should handle zero correctly', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });

  it('should add decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(add(1.5, 2.7)).toBeCloseTo(4.2);
  });

  it('should handle large numbers', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(add(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });

  it('should throw error for non-number inputs', () => {
    expect(() => add('1', 2)).toThrow('Both arguments must be numbers');
    expect(() => add(1, '2')).toThrow('Both arguments must be numbers');
    expect(() => add(null, 2)).toThrow('Both arguments must be numbers');
    expect(() => add(1, undefined)).toThrow('Both arguments must be numbers');
    expect(() => add({}, [])).toThrow('Both arguments must be numbers');
    expect(() => add(NaN, 2)).toThrow('Both arguments must be numbers');
    expect(() => add(2, NaN)).toThrow('Both arguments must be numbers');
  });
});

describe('subtract', () => {
  it('should subtract two positive numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, 5)).toBe(5);
    expect(subtract(100, 50)).toBe(50);
  });

  it('should subtract negative numbers', () => {
    expect(subtract(-5, 3)).toBe(-8);
    expect(subtract(-10, 5)).toBe(-15);
    expect(subtract(5, -3)).toBe(8);
  });

  it('should handle zero correctly', () => {
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(0, 5)).toBe(-5);
    expect(subtract(5, 0)).toBe(5);
  });

  it('should subtract decimal numbers', () => {
    expect(subtract(0.1, 0.2)).toBeCloseTo(-0.1);
    expect(subtract(1.5, 2.7)).toBeCloseTo(-1.2);
  });

  it('should handle large numbers', () => {
    expect(subtract(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    expect(subtract(Number.MIN_SAFE_INTEGER, 1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });

  it('should throw error for non-number inputs', () => {
    expect(() => subtract('1', 2)).toThrow('Both arguments must be numbers');
    expect(() => subtract(1, '2')).toThrow('Both arguments must be numbers');
    expect(() => subtract(null, 2)).toThrow('Both arguments must be numbers');
    expect(() => subtract(1, undefined)).toThrow('Both arguments must be numbers');
    expect(() => subtract({}, [])).toThrow('Both arguments must be numbers');
    expect(() => subtract(NaN, 2)).toThrow('Both arguments must be numbers');
    expect(() => subtract(2, NaN)).toThrow('Both arguments must be numbers');
  });
});

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(10, 10)).toBe(100);
  });

  it('should handle multiplication with negative numbers', () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(2, -3)).toBe(-6);
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should handle multiplication with zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle decimal numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    expect(multiply(1.5, 2)).toBe(3);
  });

  it('should handle large numbers', () => {
    expect(multiply(1000, 1000)).toBe(1000000);
    expect(multiply(-1000, 1000)).toBe(-1000000);
  });

  it('should throw error for non-number inputs', () => {
    expect(() => multiply('1', 2)).toThrow('Both arguments must be numbers');
    expect(() => multiply(1, '2')).toThrow('Both arguments must be numbers');
    expect(() => multiply(null, 2)).toThrow('Both arguments must be numbers');
    expect(() => multiply(1, undefined)).toThrow('Both arguments must be numbers');
    expect(() => multiply({}, [])).toThrow('Both arguments must be numbers');
    expect(() => multiply(NaN, 2)).toThrow('Both arguments must be numbers');
    expect(() => multiply(2, NaN)).toThrow('Both arguments must be numbers');
  });
});

describe('divide', () => {
  it('should divide two positive numbers', () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(10, 5)).toBe(2);
    expect(divide(100, 10)).toBe(10);
  });

  it('should handle division with negative numbers', () => {
    expect(divide(-6, 2)).toBe(-3);
    expect(divide(6, -2)).toBe(-3);
    expect(divide(-6, -2)).toBe(3);
  });

  it('should handle division with decimals', () => {
    expect(divide(5, 2)).toBe(2.5);
    expect(divide(1, 4)).toBe(0.25);
    expect(divide(0.6, 0.2)).toBeCloseTo(3);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });

  it('should handle large and small numbers', () => {
    expect(divide(1000000, 1000)).toBe(1000);
    expect(divide(1, 1000)).toBe(0.001);
  });

  it('should throw error for non-number inputs', () => {
    expect(() => divide('1', 2)).toThrow('Both arguments must be numbers');
    expect(() => divide(1, '2')).toThrow('Both arguments must be numbers');
    expect(() => divide(null, 2)).toThrow('Both arguments must be numbers');
    expect(() => divide(1, undefined)).toThrow('Both arguments must be numbers');
    expect(() => divide({}, [])).toThrow('Both arguments must be numbers');
    expect(() => divide(NaN, 2)).toThrow('Both arguments must be numbers');
    expect(() => divide(2, NaN)).toThrow('Both arguments must be numbers');
  });
});
