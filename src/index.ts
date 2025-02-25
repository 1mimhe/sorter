import { CharactersCollection, NumbersCollection } from './Collections';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([
  42, -17, 93, -5, 68, -23, 81, 34, -56, 12,
]);
numbersCollection.bubbleSort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('HelloWorld');
charactersCollection.bubbleSort();
console.log(charactersCollection.data);

const linkedList = new LinkedList<number>();
linkedList.add(0);
linkedList.addList([42, -17, 93, -5, 68, -23, 81, 34, -56, 12]);
console.log(linkedList.at(2).value);
console.log(linkedList.at(3).value);
linkedList.swap(2, 3);
console.log(linkedList.list);
linkedList.bubbleSort();
console.log(linkedList.list);

const linkedList2 = new LinkedList<string>();
linkedList2.addList([
  'banana',
  'apple',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',
]);
linkedList.bubbleSort();
console.log(linkedList2.list);
