// yarn add loadsh
// loadsh first / each / reverse / findIndex / toUpper

const _ = require("loadsh");

const array = ["lucy", "lili", "kate", "lala"];

console.log(_.first(array)); // lucy

console.log(_.toUpper(_.first(array))); // LUCY

const r = _.each(array, (item, index) => console.log(item, index)); // lucy 0 lili 1 kate 2lala 3

console.log(r); // [ 'lucy', 'lili', 'kate', 'lala' ]

console.log(_.reverse(array)); // [ 'lala', 'kate', 'lili', 'lucy' ]

console.log(_.findIndex(array, (item) => item === "lili")); // 2
