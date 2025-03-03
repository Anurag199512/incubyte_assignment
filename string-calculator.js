export function stringCalculator(input) {
  if (!input || !input.length) return 0;

  const delimiter = identifyDelimiter(input);

  // check if external adhoc delimiter is provided
  input = trimInputIfDelimiterIsDynamic(input);

  // replace new line delimiter with a common delimiter
  input = input.replace(/\n/g, delimiter);
  
  const numbers = input.split(`${delimiter}`);

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

function identifyDelimiter(input) {
  let delimiter = ',';

  if (input.startsWith('//') && input[2]) {
    delimiter = input[2];
  }

  return delimiter;
}

function trimInputIfDelimiterIsDynamic(input) {
  if (input.startsWith('//') && input[2]) {
    return input.slice(3);
  }

  return input;
}
