const letterPositions = function(sentence) {
  const results = {};
  // Remove whitespace, thank you StackOverflow
  let workingStr = sentence.replace(/\s+/g, '');
  // Loop through each character
  for (let i = 0; i < workingStr.length; i += 1) {
    if (results[workingStr[i]]) {
      results[workingStr[i]].push(String(i));
    } else {
      results[workingStr[i]] = [String(i)];
    }

  }
  return results;
};

console.log(letterPositions("hello"));