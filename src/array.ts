interface Array<T> {
  myReduce<U = T>(
    callbackFn: (
      previousValue: U,
      currentValue: T,
      currentIndex?: number,
      arr?: T[]
    ) => U,
    initialValue?: U
  ): U;

  myMap<U = T>(
    callbackFn: (element: T, index?: number, array?: T[]) => U,
    thisArg?: any
  ): U[];

  myFilter(
    callbackFn: (element: T, index?: number, array?: T[]) => boolean,
    thisArg?: any
  ): T[];
}

Array.prototype.myReduce = function (callback, intialValue) {
  let result = intialValue;
  let arr = this;

  arr.forEach((nextItem, index) => {
    // skip if initial value is not passes
    if (index == 0 && !intialValue) {
      result = nextItem;
      return;
    }
    result = callback(result, nextItem, index, arr);
  });
  return result;
};

Array.prototype.myMap = function (callbackFn, thisArg) {
  let arr = this;

  let result = arr.reduce((previousValue, currentValue) => {
    return [...previousValue, callbackFn(currentValue)];
  }, []);

  return result;
};

Array.prototype.myFilter = function (callbackFn, thisArg) {
  let arr = this;
  let result = arr.reduce((previousValue, currentValue) => {
    return callbackFn(currentValue)
      ? [...previousValue, currentValue]
      : previousValue;
  }, []);

  return result;
};

let arr = [1, 2, 3, 4, 5];
let sumCallback = (previousValue, currentValue) => {
  return previousValue + currentValue;
};
let sumWithoutInitial = arr.myReduce(sumCallback);
let sumWithInitial = arr.myReduce(sumCallback, -5);

console.log("Sum Without Initial:", sumWithoutInitial);
console.log("Sum With Initial:", sumWithInitial);

const names = ["Alice", "Bob", "Tiff"];
const nametoDictCallback = (currentValue) => {
  return {
    currentValue,
  };
};

const dictName = names.myMap(nametoDictCallback);
console.log(dictName);

const filterOddNumber = (num: number) => {
  return num % 2 != 0;
};
const oddNumber = arr.myFilter(filterOddNumber);
console.log("Odd Number", oddNumber);
