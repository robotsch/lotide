const takeUntil = function(arr, cb) {
  let results = [];
  for (const item of arr) {
    if (cb(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", 'to', "Hollywood"]);