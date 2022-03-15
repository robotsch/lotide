const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 ${actual} !== ${expected}`);
  }
};

module.exports = assertObjectsEqual;