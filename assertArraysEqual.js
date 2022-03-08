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
  if(eqArrays(arr1, arr2)) {
    console.log(`✅ ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 ${arr1} !== ${arr2}`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [1, 2, 3, 4])