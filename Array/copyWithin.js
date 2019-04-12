/**
 * Array​.prototype​.copy​Within()
 * index 를 사용하여 배열의 요소를 변경(복사)
 * polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin#Polyfill
 */

const array1 = ['a', 'b', 'c', 'd', 'e'];

/**
 * 배열의 마지막 2번째 요소부터 0 번째 요소부터 시작해서 변경
 */
array1.copyWithin(-2)
// ['a', 'b', 'c', 'a', 'b'];


/**
 * 1번째 index 요소를 index 3번째 요소로 변경
 */
array2.copyWithin(1, 3)
// ["a", "d", "e", "d", "e"]

/**
 * index 0 번째 요소부터 배열의 index 3 부터 index 4 까지의 요소로 변경
 */
array1.copyWithin(0, 3, 4)
// expected output: Array ["d", "b", "c", "d", "e"]
array1.copyWithin(0, 3, 5)
// expected output: Array ["d", "e", "c", "d", "e"]