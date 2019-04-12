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