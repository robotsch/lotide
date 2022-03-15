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

module.exports = middle;