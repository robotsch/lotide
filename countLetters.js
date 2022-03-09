const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputStr) {
  const results = {}
  // Remove whitespace, thank you StackOverflow
  let workingStr = inputStr.replace(/\s+/g, '')
  // Loop through each character
  for(const char of workingStr) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results
}

console.log(countLetters("lighthouse in the house"))