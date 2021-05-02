import { ArrayStack } from './index'

const numberList = new ArrayStack<number>();

numberList.push(5);
numberList.push(8);

console.log(numberList.size);
console.log(numberList.items.toString());

numberList.pop();

console.log(numberList);