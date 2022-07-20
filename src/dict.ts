/*
Implement map and reduce for dict type
What's a dict?
- First of all, it's a set of key-value pairs (unique keys)
- all values are of same type
- all keys are of same type

*/
const a = {
  x: 1,
  y: 2,
  z: 3,
};

interface Dict<T> {
  [k: string]: T;
}

const mapDict = <T, U = T>(
  dict: Dict<T>,
  callbackFn: (item: T, key: string) => U
): Dict<U> => {
  let newDict: Dict<U> = {};
  for (let key in dict) {
    newDict[key] = callbackFn(dict[key], key);
  }
  return newDict;
};

const mapDictToList = <T, U = T>(
  dict: Dict<T>,
  callbackFn: (item: T, key: string) => U
): U[] => {
  let mappedDict: U[] = [];
  for (let key in dict) {
    mappedDict.push(callbackFn(dict[key], key));
  }
  return mappedDict;
};

const reduceDict = <T, U = T>(
  dict: Dict<T>,
  callbackFn: (previousValue: U, currentValue: T) => U,
  initialValue?: U
) => {
  let resultValue = initialValue;

  for (let key in dict) {
    let currentItem = dict[key];
    resultValue = callbackFn(resultValue, currentItem);
  }
  return resultValue;
};

const b = mapDict(a, (x) => x + 1);
const c = mapDictToList(a, (x) => x + 1);
const sumDict = reduceDict(
  a,
  (previousValue, currentValue) => {
    return previousValue + currentValue;
  },
  0
);
console.log(a, b, c, sumDict);
// { x: 1, y: 2, z: 3 } { x: 2, y: 3, z: 4 } [ 2, 3, 4 ]
