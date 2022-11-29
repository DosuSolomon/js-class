// statement
// (Condition, IF, SWITCH)
// Function
// Arrow Function
// Constructor Function and Prototype
// ES6 classes

// Condition, if and switch
// = means assignment operator
// == comparison operator
// === strict check

// if(x>y){
//   // statement
//   console.log("False")
// }
// else{
//   console.log("This is else block")
// }

// if(x === "20"){
//   console.log("x is equal to 20")
// }else{
//   console.log("x is not equal to 20")
// }
// nested if condition

// let x = 10;
// let y = 10;

// if(x === "10"){
//   // console.log("x is equal to 10")
//   if(y===10){
//     console.log("x and y is equal to 10")
//   }
//   else{
//     console.log("x and y is not equal to 10");
//   }
// }
// else{
//   console.log("x and y is not equal to 10")
// }
// if(x===10 || y === "10"){
//   console.log("x and y is equal to 10")
// }
// else{
//   console.log("x and y is not equal to 10")
// }

// if(x===10 && y === "10"){
//   console.log("x and y is equal to 10")
// }
// else{
//   console.log("x and y is not equal to 10")
// }

// let x = 2
// let y = 10
// // else if
// if(x===10 && y === "10"){
//   console.log("x or y is equal to 10")
// }
// else if(x<5){
//   console.log("x is less than 5")
// }
// else{
//   console.log("x is not equal to 10")
// }

// Sharing Government palliatives amongst citizens
// if age is below 12 you get Ribenna
// if age is above 12 but less than 30, you get pack of indomie
// if age is above 30, you get money
// if age doesn't exist, you are dead

// var username = prompt("Enter your name: ").toLocaleUpperCase();
// var age = parseInt(prompt("Enter your age: "));

// if (age >=1 && age <=12 ) {
//   console.log(`${username} you get Ribinna`);
// } else if (age > 12 && age <= 30) {
//   console.log(username + "you get Pack of indomie");
// }
// else if(age > 30 && age<=100){
//   console.log(username + "You get money")
// }
// else{
//   console.log("Otilo")
// }

// Switch case
// var dev = prompt("Enter your skill: ").toLocaleLowerCase();
// switch(dev){
//   case "html":
//     console.log("I am html developer");
//     break;
//   case "css":
//     console.log("I am a css developer")
//     break;
//   case "javascript":
//     console.log("I am a javascript developer")
//     break;
//   case "python":
//     console.log("I am a Python developer")
//     break;

//   default:
//     console.log("I am a beginner")
//     break;
// }

// function
// function are block of code used to perform a specific or multiple task

// function declaration
// function expression
// arrow function

// function expression
function message(a, b) {
  // addition
  // return a + b
  console.log(a + b);
}
// function declaration
const message2 = function () {
  console.log("Hello 2");
};
// arrow function - Es6
const message3 = (a, b) => console.log(a * b);

message(100, 200);
message2();
message3(50, 2);
