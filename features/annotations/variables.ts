let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];
let nums: number[] = [1, 2, 3];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 5,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) function that returns the "any" type
const json = "{'x': 10, 'y': 20}";
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);

// 2) when we declare a var and init it later
let words = ["frog", "green", "muppet"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) variable whose type cannot be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
// we want numberAboveZero to be false if there are none in the array, or first number found if there is one
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
