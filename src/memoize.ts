const memoize = <T, U, V>(
  func: (...args: T[]) => U,
  resolver?: (...args: T[]) => V
) => {
  let cache = new Map();

  const outputFun = (...arguments: T[]) => {
    //if resolver is not there use first argument as key
    const key =
      typeof resolver === "function" ? resolver(...arguments) : arguments[0];

    if (cache.has(key)) {
      //cache hit
      return cache.get(key);
    }

    cache.set(key, func(...arguments));
    return cache.get(key);
  };

  return outputFun;
};

const sum = (a, b) => {
  return a + b;
};

const getList = (a) => {
  return Object.keys(a);
};

const memoizedSum = memoize(sum);

const nonCached = memoizedSum(1, 2);
//3
const cached = memoizedSum(1, 5);
//3
console.log(nonCached, cached);

let test = {
  a: 1,
  b: 2,
};

let test1 = {
  a: 1,
  b: 2,
  c: 3,
};

const memoizedGetList = memoize(getList);
const nonCachedList = memoizedGetList(test);

test["c"] = 5;

const cachedList = memoizedGetList(test);
console.log(nonCachedList, cachedList);
