import { stringCalculator } from './string-calculator.js';

test('default test case with 2 numbers', () => {
  expect(stringCalculator('1,5')).toBe(6);
});

test('scenario when no input is given to func', () => {
  expect(stringCalculator('')).toBe(0);
});

