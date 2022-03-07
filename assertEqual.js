// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("abc", "abc");
assertEqual(1, 1);
assertEqual(1, 2);
