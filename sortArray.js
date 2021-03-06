export const sortByKeyAsc = (array, key) => {
  return array.sort((a, b) => {
    const x = a[key]
    const y = b[key]
    return x < y ? -1 : x > y ? 1 : 0
  })
}

export const sortByKeyDesc = (array, key) => {
  return array.sort((a, b) => {
    const x = a[key]
    const y = b[key]
    return x < y ? 1 : x > y ? -1 : 0
  })
}