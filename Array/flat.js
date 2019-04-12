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