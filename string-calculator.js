export function stringCalculator(input) {
  if (!input || !input.length) return 0;

  const numbers = input.split(',');

  let sum = 0;

  for (const num of numbers) {
    sum = sum + Number(num);
  }

  return sum;
}