/**
 * Array.include
 * 특정 요소를 포함하고 있는지 여부를 확인하고 boolean 값으로 return
 * polyfill IE https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#%ED%8F%B4%EB%A6%AC%ED%95%84
 * node >= 6.0.0
 * 
 * 2번째 파리미터 idx : 해당 index 부터 찾기 시작
 * 변수에 객체를 할당해서 확인하면 true가 return 되지만 직접 확인하면 false로 return
 * 
 * Number​.isInteger IE polyfill
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#%ED%8F%B4%EB%A6%AC%ED%95%84
 */

const array = [NaN, 1, 2, 3];
const obj = { a: 1 };
array.push(obj);

export const includeEl = (arr, el, idx) => {
  return arr.includes(el, Number.isInteger(idx) ? idx : null);
};

console.log(includeEl(array, obj)); // true
console.log(includeEl(array, NaN, 2)); // false
console.log(includeEl(array, { a: 1 })); // false