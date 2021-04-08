/* rgex regular expression are the set of characters that defines the search pattern
 RegExp mainly perform the  2 function
 1.search():it tests for the matches in the string.this returns the index of the match
 2.match():it tests for matches and returns all the matched 
    some basic regex are:-
    # ^:indicates the start of the line
    # \d:finds any numeric digits

    # [abc]: checks the only characters betwen the brackets
    # [123]: finds the only digits between the bracket
    # [^abc]:finds any characters not between the barackets
    # [^0-9]:finds any numbers digits not between the bracket 
      ---so lets understand this symbol ( ^ ) performs negation 
    # (x|y):finds any of the alternative specifid  
 */

var word = "Day one of Javasript";
var n = word.search(/Javasript/);
console.log(n); // prints 11 , the first index position of J
/*
 regex are immensly helpful for checking the validity of user input in javascript.
 The five mostly used regex are mentioned below
 
 **/
// 1 Numeric Charactrs
var reg = /\d+/; //checks if there are any numeric characteres
reg.test("123"); //true
reg.test("3w12d"); //true
reg.test("asdsd"); //false

// 2 Only Numeric Characters
//     /^\d+$/
var reg = /^\d+$/;
reg.test("123"); //returns true
reg.test("123sasd"); //returns false

// 3 Floating number constants
//   /^[0-9].[0-9]*[1-9]+$/
var reg = /^[0-9].[0-9]*[1-9]+$/;
reg.test("10"); //returns false
reg.test("123.123"); //returns true

// 4 Alphanumeric Characters
//  /[a-zA-Z0-9]​/
reg.test("123"); //true
reg.test("1223we"); //true
reg.test("qwerety"); //true
reg.test("^"); //false

// 5 Query String
// /([^?=&]+)(=([^&]*))/

var uri =
  "http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv";
var queryString = {};
uri.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
  queryString[$1] = $3;
});
console.log("ID: " + queryString["product_id"]); // ID: 2140
console.log("Name: " + queryString["product_name"]); // Name: undefined
console.log("Category: " + queryString["category"]); // Category: 4
