/**
 * Object
 * 
 * *참고 Object.keys -> 객체의 키값들은 순서대로 배열 생성
 * 
 * Object.values
 * 객체의 값들을 순서대로 담은 배열생성
 * node >= 7.0.0
 * 
 * Object.entries
 * 객체의 키와 값을 배열에 담은 배열 생성
 */

export const objValues = obj => {
  return Object.values(obj)
}

export const objEntry = obj => {
  return Object.entries(obj)
}

/**
 * String
 * 
 * padStart, padEnd
 * polyfill https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd#Polyfill
 * node >= 8.0.0
 * 
 * parameter
 * (length, padString)
 */
export const padStart = (str, length, padString) => {
  return str.padStart(length, padString ? padString : null)
}
export const padEnd = (str, length, padString) => {
  return str.padEnd(length, padString ? padString : null)
}

console.log(padStart(str, 6, ','))
console.log(padEnd(str, 6, ','))

