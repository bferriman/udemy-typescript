import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
console.log("Sorted Number Array: ", numCollection.data);

const charCollection = new CharactersCollection("XaAjEcksoeIi");
charCollection.sort();
console.log("Sorted String: ", charCollection.data);

const linkedList = new LinkedList();
linkedList.add(25);
linkedList.add(-12);
linkedList.add(100);
linkedList.add(-3);
linkedList.sort();
linkedList.print();