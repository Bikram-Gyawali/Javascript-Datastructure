// non reflexive
x === x; // true
x[+[]] === x[+[]]; // false


// reciporcal
x === y; // true
1/x === 1/y; // false

// prototypes in js are babbal k ho k bujna garo xa
var someone = function() {};
someone.prototype.attributes = {};

var alice = new someone();
alice.attributes.name = 'Alice';

var bob = new someone();
bob.attributes.name = 'Bob';

var eve = new someone();



