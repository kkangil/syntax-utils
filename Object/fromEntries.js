/**
 * Object.fromEntries()
 * 
 * Object.entries() return 형식의 배열을 다시 객체로 변환
 * 
 * 현재 polyfill, node 지원하지 않음
 */

const entries = [
  ['foo', 'bar'],
  ['baz', 42]
]

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }