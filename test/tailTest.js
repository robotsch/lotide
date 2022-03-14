const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["test1", "test2", "test3"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
