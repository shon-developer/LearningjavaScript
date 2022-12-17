// let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
// console.log(names);
// console.log(names.length);
// console.log(names[3]);

// ? How to access the last element of an array
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
console.log(names[names.length - 1]);
*/

// ? How to replace an element of an array
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
names[2] = "Rithu";
console.log(names);
*/

// ? push methods => Insert new value inside this array
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
names.push("VYOM");
console.log(names);
*/

// ? Slice Methods => It will slice away the elements that starting from the start argument till the optional second end argument excluding the end argument
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
console.log(names.slice(0, 3));
*/

// ? Splice Method =>
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
names.splice(2, 1, "Rithu", "Ivin");
console.log(names);
*/

// ? Concathenation
/*
let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6, 7];
let arr3 = [6, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2, arr3));
*/

// ? Fill -> Homework
/*
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
arr4.fill('Shon', 2, 4);
console.log(arr4);
*/

// ? Includes
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num.includes(7, 7));
*/

// ? Indexof
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
console.log(names.indexOf("Shon"));
*/

// ? IsArray()
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Array.isArray(names));
console.log(Array.isArray(num));
*/

// ? Join
/*
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let var1 = arr1.join("Shon");
console.log(var1);
console.log(typeof var1);
console.log(typeof arr1);
*/

// ? key
// ? for...of

// ? lastindexof
/*
let num = [1, 2, 3, "Shon", 4, 5, 6, 7, 8, "Shon", "Shon"];
console.log(num.lastIndexOf("Shon"));
*/

// ? Map
/*
let math = [1, 4, 9, 16, 25];
console.log(math.map(Math.sqrt));
*/

// ? Pop => pop takes away the last element at the last index value
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
console.log(names.pop());
console.log(names);
*/

// ? reverse
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
console.log(names.reverse());
*/

// ? shift => shift takes away the element at the first index value
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
console.log(names.shift());
console.log(names);
*/

// ? Sort
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
console.log(names.sort());
console.log(names.reverse(names.sort()));
*/

// ? Unshift
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
console.log(names.unshift("Ana", "Ivin 2"));
console.log(names);
*/

// ? Converting to Array
/*
let name = "Shon";
let arr = name.split("");
console.log(arr);
*/

// ?  for...of
/*
let names = ["Shon", "Shine", "Sharone", "Bhavya", "Preksha"];
let upperName = [];
for (let newVariable of names) {
  upperName.push(newVariable.toUpperCase());
}
console.log(upperName);
*/

// ? Break and Continue

/*
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
*/
// ? Continue
/*
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue; // avoid or skip
  }
  console.log(i);
}
*/
