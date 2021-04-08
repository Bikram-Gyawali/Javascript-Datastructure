/*
encoding is a general concept that represents chracters in a specialized format for efficent transmisson storage

*/
// base64 encoding
// it has two functions

// 1 btoa() => it creates a base64-encoded ascii string from a string each character in the string is treated as a byte (8bits:eight 0 and 1s)

// 2 atob()=> this is just opposite of btoa() function it decodes the string of data that has been encoded b using base64 encoding
// i am using next method to run in nodejs

var name = "Bikram Gyawali";

// var enc = window.btoa(name);
// console.log(enc);
const enc = Buffer.from(name).toString("base64");
console.log(enc); // prints  => QmlrcmFtIEd5YXdhbGk=
console.log(Buffer.from(enc, "base64").toString()); //prinnts => Bikram Gyawali
