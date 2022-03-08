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

const flatten = function(arrToFlatten) {
  let newArr = [];
  // Loop through each element of original array
  for (let element of arrToFlatten) {
    // Check if any given element is also an array
    if (Array.isArray(element)) {
      // Loop through the 2nd layer array elements
      for (let deepElement of element) {
        // Push individual elements to new array
        newArr.push(deepElement);
      }
    } else {
      // Element was not array, push element to new array
      newArr.push(element);
    }
  }
  // Return new array
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), flatten([1, 2, 3, 4, 5, 6]));