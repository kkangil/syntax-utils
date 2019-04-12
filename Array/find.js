/**
 * Array​.prototype​.find()
 * 
 * 조건과 부합하는 첫번째 요소를 반환
 * polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill
 */

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

/**
 * JSON 객체도 사용 가능
 */
const array2 = [
  { num: 1 },
  { num: 15 },
  { num: 100 },
]
const func = x => x.num > 10
const result = array2.find(func)
// { num: 15 }