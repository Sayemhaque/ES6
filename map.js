const numbers = [2, 4, 5, 2, 5, 4];

// it does not change the main array
const double = numbers.map((num) => num * 2);



console.log(double);

function getDoubles(numbers) {
  const output = [];

  for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
  }
  return console.log(output);
}



getDoubles(numbers);

console.log(numbers);
