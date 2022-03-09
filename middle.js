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

const middle = function(arr) {
  // Return empty on short arrays
  if (arr.length <= 2) {
    return [];
  }
  // Calculate middle + lower index middle of even arrays
  let midIndex = Math.floor(arr.length / 2) - 1;
  // Ternary return for even/odd arrays
  return arr.length % 2 === 0 ? [arr[midIndex], arr[midIndex + 1]] : [arr[midIndex] + 1];
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5 ]), [3]);