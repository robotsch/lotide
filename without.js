const without = function(srcArr, removeArr) {
  // Initialize new array
  let newArr = [];
  // Loop through source array
  for (let element of srcArr) {
    // If remove array doesn't include the current element of source array,
    if (!(removeArr.includes(element))) {
      // Add that element to the new array
      newArr.push(element);
    }
  }
  // Return new array
  return newArr;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]  