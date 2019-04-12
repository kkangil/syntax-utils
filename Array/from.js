/**
 * Array.from
 * 새로운 배열 생성
 * 
 * polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill
 * node >= 4.0.0
 */

// string to array
Array.from('foo'); // [ "f", "o", "o" ]

//  set to array
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]

/**
 * callback 함수를 사용해서 각각의 요소를 변경해 줄 수 있음.
 */

Array.from([1, 2, 3], x => x + x)
// Array [2, 4, 6]

/**
 * 객체를 배열로 변경
 */
Array.from([{ a: 1 }, { b: 2 }, { c: 3 }], x => Object.values(x)[0])
// Array [1, 2, 3]

/**
 * length 를 사용해서 원하는 length만큼 배열 생성 가능
 * v 는 사용하지 않음 (undefined)
 */
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
