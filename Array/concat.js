/**
 * Array​.prototype​.concat()
 * 
 * 두개 이상의 배열을 병합하기 위해 사용
 */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2)); // Array ["a", "b", "c", "d", "e", "f"]

/**
 * 여러개의 배열을 동시에 병합 가능
 */
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * 요소가 배열인 경우 그대로 병합됨.
 */
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]