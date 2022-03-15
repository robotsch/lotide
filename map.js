const map = function(arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const numbers = [1, 2, 3, 4];
// const lyrics = ["wake", "me", "up"];

// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(numbers, num => num * num), [1, 4, 9, 16]);
// assertArraysEqual(map(lyrics, lyric => "🎵"), ["🎵", "🎵", "🎵"]);
