// as an object
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// this is an array - (string | number | boolean)[]
const pepsi = ["brown", true, 40];

// this is a tuple - enforces types and ordering
const coke: [string, boolean, number] = ["brown", true, 40];

// or use a type alias
type Drink = [string, boolean, number];  //this creates a type
const sprite: Drink = ["clear", true, 30];  //now "Drink" substitutes for the tuple annotation