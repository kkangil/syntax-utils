/**
 * Object.fromEntries
 * 
 * Object.entries 를 사용해서 배열 구조로 만든것을 다시 Object로 변경
 * 현재 크롬, 파이어폭스만 사용가능 (node x)
 */
export const objFromEntries = arr => {
  return Object.fromEntries(arr)
}

/**
 * Array.flat(depth)
 * 중첩 배열 펼치기
 * default depth 1, Infinity 사용 가능
 * node >= 11.0.0
 */

export const flatArray = (arr, depth) => {
  return arr.flat(depth ? depth : 1)
}

// 현재 polyfill이 없으므로 대안 방법으로 아래 함수 사용
export const flattenDeep = arr1 => {
  return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

/**
 * Array.flatMap
 * node >= 11.0.0
 * map 수행 후 flat 수행
 */
export const flatMapArray = (arr, callback) => {
  return arr.flatMap(callback)
}

const arr1 = [1, 2, 3, 4];
console.log(flatMapArray(arr1, x => [x * 2]))

const arr2 = ["it's Sunny in", "", "California"];
console.log(flatMapArray(arr2, x => x.split(" ")).join(' '))

// 대안
arr1.reduce((acc, x) => acc.concat([x * 2]), []);

/**
 * String
 * trimStart
 * trimEnd
 * trimLeft
 * trimRight
 * 
 * polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart#Polyfill
 * 
 * node >= 10.0.0
 */
var greeting = '   Hello world!   ';
console.log(greeting.trimStart()); // "Hello world!   "
console.log(greeting.trimEnd()); // "   Hello world!"
console.log(greeting.trimLeft()); // "Hello world!   "
console.log(greeting.trimRight()); // "   Hello world!"

/**
 * optional catch
 * Promise catch의 parameter를 사용하지 않는 경우 생략 가능
 * 현재 node 지원하지 않음
 */
const promise = async () => {
  try {
    const msg = await Promise.resolve("promise test");
    console.log(msg);
    throw new Error();
  } catch {
    console.log('error');
  } finally {
    console.log("finally!");
  }
};
