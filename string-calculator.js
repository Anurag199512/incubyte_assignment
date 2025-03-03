export function stringCalculator(input) {
  if (!input || !input.length) return 0;

  const numbers = input.split(',');

  let sum = 0 ;
  const negativeNumbersList = [];

  for (const num of numbers) {
    const parsedNum = Number(num);

    if (parsedNum < 0) {
      negativeNumbersList.push(parsedNum);
    }

    sum = sum + parsedNum;
  }

  if (negativeNumbersList.length > 0) {
    throw new Error(`Negative numbers not allowed such as ${negativeNumbersList.join(',')}`);
  }

  return sum;
}