const findKey = (obj, cb) => {
  for (const key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");
// assertEqual(findKey({
//   "Test1": { test: 1},
//   "Test2": { test: 2},
//   "Test3": { test: 3},
//   "Test4": { test: 4},
//   "Test5": { test: 5},
// }, t => t.test === 0), undefined);