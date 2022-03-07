// Include assertEqual as per instructions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

// Test Case: Check the original array
const words = ["test1", "test2", "test3"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
