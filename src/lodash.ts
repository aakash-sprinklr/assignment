const _get = (
  object: Object,
  path: (string | number)[],
  defaultValue?: any
) => {
  if (path.length == 0) {
    return object;
  }

  if (object.hasOwnProperty(path[0])) {
    return _get(object[path[0]], path.slice(1), defaultValue);
  }

  //property doesn't exist
  return defaultValue;
};

const _set = (object: Object, path: string[], value: any) => {
  if (path.length == 0) {
    return value;
  }
  let key = path[0];
  if (!object.hasOwnProperty(key)) {
    object[key] = {};
  }

  object[key] = _set(object[key], path.slice(1), value);
  return object;
};

let object = {
  a: [{ b: { c: 3 } }],
  x: {
    y: {
      t: "5",
    },
  },
};

let value = _get(object, ["a", "ee"], 10);
console.log(value);

let setValue = _set(object, ["x", "y", "z"], [1, 2, 3]);
console.log("set value", setValue);
