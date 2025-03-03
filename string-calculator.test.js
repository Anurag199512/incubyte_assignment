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

test('test case scenario with multiple numbers (set 1)', () => {
  expect(stringCalculator('1,2,3,4,5,6')).toBe(21);
});

test('test case scenario with multiple numbers (set 2)', () => {
  expect(stringCalculator('10,2,30,4,50,6')).toBe(102);
});

test('test case scenario with multiple numbers (set 1) with new line character as delimiter', () => {
  expect(stringCalculator('1\n2,3\n4,5\n6')).toBe(21);
});

test('test case scenario with multiple numbers (set 2) with new line character as delimiter', () => {
  expect(stringCalculator('10\n2,30\n4\n50,6')).toBe(102);
});