import { stringCalculator } from './string-calculator.js';

test('default test case with 2 numbers', () => {
  expect(stringCalculator('1,5')).toBe(6);
});

test('scenario when no input is given to function', () => {
  expect(stringCalculator('')).toBe(0);
});

test('case when only a single number is given as input', () => {
  expect(stringCalculator('7')).toBe(7);
});

test('case when only a single negative number is given as input', () => {
  expect(() => stringCalculator('-7')).toThrow('Negative numbers not allowed such as -7');
});

test('case when multiple negative number is given as input', () => {
  expect(() => stringCalculator('4,5,-4,6,2,-7')).toThrow('Negative numbers not allowed such as -4,-7');
});
