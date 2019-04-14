/**
 * Object​.assign()
 * 객체를 복사할때 사용
 * 
 * polyfill
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#%ED%8F%B4%EB%A6%AC%ED%95%84
 */

/**
 * 빈 객체에 obj 객체를 복사하는 경우
 */
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

/**
 * 동일한 객체의 키값을 사용하면 출처 객체의 속성으로 덮임.
 */
const obj = { a: 1 };
const copy = Object.assign({ a: 3 }, obj);
console.log(copy); // { a: 1 }

/**
 * 대상객체 o1 가 변경되는 현상
 */
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 },

/**
 * 대상 객체를 빈 객체로 설정해주면 o1 의 객체는 변하지 않음.
 */
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1 },

/**
 * deep clone
 * 객체 내부의 객체까지 복사 하는경우 새로운 객체의 값을 변경해도 원래 객체의 값이 같이 변경되는 현상 발생
 * assign 메소드를 사용하는것이 아니라 다른 대안으로 복사
 */
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = JSON.parse(JSON.stringify(obj1))

