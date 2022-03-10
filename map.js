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

const map = function(arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4];
const lyrics = ["wake", "me", "up"];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(numbers, num => num * num), [1, 4, 9, 16]);
assertArraysEqual(map(lyrics, lyric => "🎵"), ["🎵", "🎵", "🎵"]);
