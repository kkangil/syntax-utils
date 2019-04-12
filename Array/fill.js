/**
 * Array​.prototype​.fill()
 * 
 * index 와 value 를 사용해서 배열 요소를 변경
 * polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#Polyfill
 */

const array1 = [1, 2, 3, 4];

/**
 * index 2번 부터 index 4번까지 0 으로 변경
 */
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

/**
 * index 1번 부터 모든 요소를 5로 변경
 */
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

/**
 * 배열의 모든 요소를 6으로 변경
 */
console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]