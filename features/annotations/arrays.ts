const carMakers = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake = [
  ["Focus", "Fusion", "Fiesta"],
  ["Camry", "Corolla", "Prius"],
  ["Impala", "Camaro", "Equinox"],
];

// Help with inference when extracting values
const carBrand = carMakers[2];
const myCar = carMakers.pop();

// Help prevent adding incompatible values
carMakers.push(10);

// Help with map, forEach, etc. - because TS knows car is a string, it can offer autocomplete for string functions when writing the return statement
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2020-10-10");
importantDates.push(10);
