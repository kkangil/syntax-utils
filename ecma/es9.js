/**
 * Object rest, spread
 * rest는 선택되지 않은 나머지 항목들을 복사. (객체는 복사가 아니라 참조)
 * 
 * 키값이 같으면 기존의 값을 덮어씌움
 */

// rest
const obj = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...rest } = obj;
console.log(rest); // {c: 3, d: 4}

// copy
const obj2 = { ...obj, a: 3, c: 5 }
console.log(obj2) // { a: 3, b: 2, c: 5, d: 4 }

/**
 * finally 추가
 * 비동기 함수에서 Promise 성공 실패와 상관없이 무조건 실행. (로딩 처리해 주면 좋을듯)
 * resolve 값은 바꿀 수 없고 reject 값만 변경 가능
 * node >= 10.0.0
 */

const promise = async () => {
  try {
    const msg = await Promise.resolve("promise test");
    console.log(msg);
    throw new Error("error");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("finally!");
  }
};

promise();