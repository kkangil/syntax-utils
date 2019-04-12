export const deepCloneObj = obj => {
  return JSON.parse(JSON.stringify(obj))
}

export const deepCloneArr = arr => {
  return arr.map(row => {
    return { ...row }
  })
}