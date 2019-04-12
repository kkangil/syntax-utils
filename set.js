/**
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
 * */

const set = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
const arr = [1, 2, 3];

const checkValue = value => {
  return set.has(value);
};

const deleteValue = value => {
  set.delete(value);
  return set;
};

const addValue = value => {
  set.add(value);
  return set;
};

const size = () => {
  return set.size;
};

const loop = () => {
  for (let item of set.values()) console.log(item);
  for (let item of set.keys()) console.log(item);
};

const converSetToArr = set => {
  return Array.from(set);
};

const intersection = set => {
  return new Set([...set].filter(x => set2.has(x)));
};

const intersectionByArr = (set, arr) => {
  return [...set].filter(x => new Set(arr).has(x));
};

const difference = set => {
  return new Set([...set].filter(x => !set2.has(x)));
};

const differenceByArr = (set, arr) => {
  return [...set].filter(x => new Set(arr).has(x));
};

const clearSet = set => {
  return set.clear();
};

const obj = { a: 1 };

// console.log(addValue(obj))
// console.log(checkValue(obj));
// console.log(checkValue({a: 1}));

// console.log(addValue(JSON.stringify(obj)))
// console.log(checkValue(JSON.stringify(obj)));
// console.log(checkValue(JSON.stringify({a: 1})));

// console.log(deleteValue(7))
// loop()
// console.log(converSetToArr(set))
// console.log(intersection(set))
// console.log(intersectionByArr(set, arr))

// console.log(addValue(4));
// console.log(addValue(1));
// console.log(addValue(6));

