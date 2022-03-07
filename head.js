const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
