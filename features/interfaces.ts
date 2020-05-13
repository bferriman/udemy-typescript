// an interface for a vehicle that matches all properties of the oldCivic object
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// a more generic interface that matches any object with a summary function that returns a string
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const pepsi = {
  color: "brown",
  carbonated: "true",
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}g sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
printSummary(pepsi);
