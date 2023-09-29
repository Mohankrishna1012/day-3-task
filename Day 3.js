let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };


let obj1Str = JSON.stringify(obj1);
let obj2Str = JSON.stringify(obj2);


if (obj1Str === obj2Str) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}
