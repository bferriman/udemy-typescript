import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const numSorter = new Sorter(numCollection);
numSorter.sort();
console.log("Sorted Number Array: ", numCollection.data);

const charCollection = new CharactersCollection("XaAjEcksoeIi");
const charSorter = new Sorter(charCollection);
charSorter.sort();
console.log("Sorted String: ", charCollection.data);