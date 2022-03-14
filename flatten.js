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

module.exports = flatten

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), flatten([1, 2, 3, 4, 5, 6]));