/**
 * Array​.prototype​.every()
 *
 * 모든 배열의 요소가 조건에 맞는지 확인 후 boolean 값 리턴
 * polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#Polyfill
 */

const array1 = [1, 30, 39, 29, 10, 13];
array1.every(x => x < 40) // true

/**
 * callback 함수는 변수로 사용가능
 */
const adult = x => x > 19
array1.every(adult) // false