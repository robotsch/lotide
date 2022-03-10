const eqArrays = function(arr1, arr2) {
  // Catch length mismatch
  if (arr1.length === arr2.length) {
    // Loop through elements
    for (let i = 0; i < arr1.length; i += 1) {
      // Return false on catching difference
      if (!(arr1[i] === arr2[i])) {
        return false;
      }
    }
  } else {
    // Return false on length mismatch
    return false;
  }
  // Will only run after diff catches fail
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 ${arr1} !== ${arr2}`);
  }
};

const takeUntil = function(arr, cb) {
  let results = []
  for(const item of arr) {
    if(cb(item)) {
      return results
    } else {
      results.push(item)
    }
  }
  return results
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", 'to', "Hollywood"])