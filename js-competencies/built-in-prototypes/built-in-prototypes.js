//+++++++++ Start Here! All problems are below. +++++++++//

//////////////////PROBLEM 1////////////////////

//Write a function called dragonMapper that takes in an
//array and maps over each element, adding the string
//'...here be dragons' to the end of each element.
//dragonMapper should return the the new array. You should
//use the built-in array method .map

//Code here
function dragonMapper(arr) {
  let newArr = arr.map(function (element) {
    return `${element}...here be dragons`;
  });
  return newArr;
}

//////////////////PROBLEM 2 (CHECK)////////////////////

//Write a function called cookieLoversOnly that takes
//in an array and filters out every object that
//does NOT have the key favoriteCookie.
//cookieLoversOnly should return the filtered array.

//Code here
function cookieLoversOnly(arr) {
    let filterArr = arr.filter(function (element) {
      element === favoriteCookie;
    });
    return filterArr;
}

//////////////////PROBLEM 3 (CHECK)////////////////////

//Write a function called changeValue that takes
//in an array, and a callback function.
//changeValue should invoke the callback function
//for every element in the array.
//changeValue should pass the current element into
//the callback function as an argument every time it is invoked.
//Hint: there is an array method for this.

//Code here
function changeValue(arr) {
  let newArr = arr.map(function(element){
    return element;
  })
}



//////////////////PROBLEM 4////////////////////

//Write a function called findProduct that takes in
//an array, and uses .reduce to find the product of
//the elements (here the word product means the result
//of multiplying all the elements together)
//Return the product.

//Code here
function findProduct(arr) {
let answer = arr.reduce(function(acc, curr){
  return acc * curr;
  })
  return answer;
}

//////////////////PROBLEM 5////////////////////

//Write a function called cipherize that takes in
//an array, and a string. It should use the
//array method .indexOf to find the index of the passed-in
//string in the array. Then, it should use the method .charAt
//to find the character at that index, in the string.
//Return that character.

//EX: cipherize(["hello", "world", "wide", "web"], "wide")
// index of string in the array: 2
// character at index 2 of "wide": "d"
// cipherize will return: "d"

//Code here
function cipherize(arr, str) {
  let index = arr.indexOf(str);
  let char = arr[index].charAt(index);
  return char;
}

//////////////////PROBLEM 6////////////////////

//Write a function called reverseMe that takes in
//a string, reverses it, and returns the reversed
//string. Use built-in methods for taking the string
//apart, reversing it, and putting it back together again.

//Code here

function reverseMe(str) {
  let splitStr = str.split('');
  let reverseStr = splitStr.reverse();
  let newStr = reverseStr.join('');
  return newStr;
}