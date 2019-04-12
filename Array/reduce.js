/**
 * Array​.prototype​.reduce()
 *
 * map 과는 다르게 누적값을 제공하기 때문에 다양한 방법으로 사용가능
 * 배열.reduce((누적값, 현재값, index, 요소) => { return 결과 }, 초깃값);
 * 
 * Array​.prototype​.reduceRight
 * 배열을 오른쪽에서 부터 반복
 */

const array1 = [1, 2, 3];

const reducer = (accumulator, currentValue, index) => {
  console.log("accumulator", accumulator);
  console.log("currentValue", currentValue);
  console.log(index);
  return accumulator + currentValue;
};

/**
 * accumulator 1 / currentValue 2 / 1
 * accumulator 3 / currentValue 3 / 1
 */

// 1 + 2 + 3 = 6 초기값을 정해주지 않으면 0 번째 index가 초기값이 되며 1 번째 부터 반복 시작
console.log(array1.reduce(reducer));

const sum = (arr, initialValue) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
}

/**
 * 초기값 1로 설정
 * accumulator 1 / currentValue 1 / 0
 * accumulator 2 / currentValue 2 / 1
 * accumulator 4 / currentValue 3 / 2
 * 
 * 1 + 1 + 2 + 3 = 7
 */
console.log(array1.reduce(reducer, 1));


const array2 = [{ x: 1 }, { x: 2 }, { x: 3 }]
const sumByKey = (arr, key, initialValue) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue[key], initialValue)
}
console.log(sumByKey(array2, 'x', 0))
// 1 + 2 + 3 = 6

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

/**
 * 초기값 빈 객체
 * 현재값이 누적값(객체)에 존재하면 count 없으면 1로 생성
 */
const countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames)
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

/**
 * groupBy 함수
 */
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }

