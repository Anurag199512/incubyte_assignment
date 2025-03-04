import { add } from './string-calculator.js';

test('default test case with 2 numbers', () => {
  expect(add('1,5')).toBe(6);
});

test('scenario when no input is given to function', () => {
  expect(add('')).toBe(0);
});

test('case when only a single number is given as input', () => {
  expect(add('7')).toBe(7);
});

test('case when only a single negative number is given as input', () => {
  expect(() => add('-7')).toThrow('negative numbers not allowed -7');
});

test('case when multiple negative number is given as input', () => {
  expect(() => add('4,5,-4,6,2,-7')).toThrow('negative numbers not allowed -4,-7');
});

test('test case scenario with multiple numbers (set 1)', () => {
  expect(add('1,2,3,4,5,6')).toBe(21);
});

test('test case scenario with multiple numbers (set 2)', () => {
  expect(add('10,2,30,4,50,6')).toBe(102);
});

test('test case scenario with multiple numbers (set 1) with new line character as delimiter', () => {
  expect(add('1\n2,3\n4,5\n6')).toBe(21);
});

test('test case scenario with multiple numbers (set 2) with new line character as delimiter', () => {
  expect(add('10\n2,30\n4\n50,6')).toBe(102);
});

test('test case scenario with multiple numbers (set 1) with ; delimiter', () => {
  expect(add('//;1\n2;3\n4;5\n6')).toBe(21);
});


test('test case scenario with multiple numbers (set 2) with "A" as delimiter', () => {
  expect(add('//A\n10A2A30\n4\n50A6')).toBe(102);
});


// failure cases not supported
// test('case with "A" as delimiter but  (input format wrong)', () => {
//   expect(add('/A\n10A2A30\n4\n50A6')).toBe(102);
// });

// test('case with multiple delimiters', () => {
//   expect(add('1,2,3;4#5$6')).toBe(21);
// });