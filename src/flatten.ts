// Implement flatten:
// flatten: (array, depth) -> array

const flatten = (array: any[], depth?): any[] => {
  if (depth === 0) {
    return array;
  }
  const flattendArray = [];
  array.forEach((item, index) => {
    if (Array.isArray(item)) {
      flattendArray.push(...flatten(item, depth - 1));
    } else {
      flattendArray.push(item);
    }
  });

  return flattendArray;
};

console.log(flatten([1, 2, ["a", 4, [5, 6, [7, 8]]]], 1));
// [ 1, 2, 'a', 4, [ 5, 6, [ 7, 8 ] ] ]
console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8]]]], 2));
// [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8]]]]));
// [1, 2, 3, 4, 5, 6, 7, 8]
