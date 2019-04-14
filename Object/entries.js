/**
 * Object.entries()
 * 객체를 [key, value] 형식의 배열로 반환
 * 
 * polyfill
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#Polyfill
 */

const object2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object2));
//Array [Array ["0", "a"], Array ["1", "b"], Array ["2", "c"]]