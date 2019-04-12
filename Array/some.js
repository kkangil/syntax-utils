/**
 * Array​.prototype​.some()
 * 
 * every가 모든 요소를 판단하는것이라면 some 은 조건이 하나라도 맞는것이 있으면 true
 */
const array = [1, 2, 3, 4, 5];

const even = element => {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true

const fruits = ['apple', 'banana', 'mango', 'guava'];

const checkAvailability = (arr, val) => {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true