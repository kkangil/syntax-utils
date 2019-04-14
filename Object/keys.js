/**
 * Object.keys()
 * 
 * 객체의 key 값들을 배열로 return
 * 
 * polyfill
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Polyfill
 */

const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']