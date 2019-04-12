export const checkValueInArray = (arr, val) => {
  return arr.some(arrVal => val === arrVal.code)
}