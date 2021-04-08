// 1 slice function

var array1 = [1, 2, 3, 4];
array1.slice(1, 2); // retutrns [2] with no change in the original array
array1.slice(2, 4); //returns [3,4] with no change in the array

//if only begininig is passed the ending will be considered as maximum
array1.slice(1); //returns [2,3,4]
array1.slice(1, 4); //returns [2,3,4]

// if nothing is passed inside the slice function it returns the copy of original array

// 2 splice function

var arr = [1, 2, 3, 4];
var arr1 = arr;

// now both arr and arr1 has the same array value
arr1[0] = 2;
arr1; //returns [2,2,3,4]
arr; //returns [2,2,3,4]
// assigning any value to the arr1 will change the original array (arr) because it is a refrence to the original array to solve this problem we can use Array.from()

var arr; //[1,2,3,4];
arr2 = Array.from(arr); //[1,2,3,4];

arr2[0] = 10;

arr2; //returns [10,2,3,4]
arr; //returns [1,2,3,4]

// 3 .splice()

// this helper function returns and changes the contents od an array b removing existing elements and / or adding new elements

// splice() takes three parameteres the begening index ,the size of things to be removed and the new elements to add
arr.splice(); //returns [],arr=[1,2,3]
arr.splice(1, 2); //returns [2,3] ,arr=[1,4]

// This example demonstrates removal. [2,3] was returned because it selected two
// items starting from an index of 1.

var arr = [1, 2, 3, 4];
arr.splice(1, 2, [5, 6, 7], 4); //returns [2,3] and set arr value to arr=[1,[5,6,7],4]

// 4 .concat()
var arr = [1, 2, 3, 4];
arr.concat(); //returns [1,2,3.4]
arr.concat([2, 3, 4]); //retunrs [1,2,3,4,2,3,4]

// 5 .length
arr.length; //returns 4 arr=[1,2,3,4]
arr.length = 3; //it sets the length to 3 arr=[1,2,3]

// spread operator
// the spread operator denoted by three periods (...) is used to expand argments where zero arguments are expeced

function addNum(a, b, c, d) {
  return a + b + c + d;
}
var num = [1, 2, 3, 4];
console.log(addNum(...num));
