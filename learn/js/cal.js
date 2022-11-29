// function message(message="Hello"){
//   console.log(message);
// }
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

// message()

// const num1 = parseFloat(prompt("Enter first number: "));
// const choice = prompt("+, -, *, /");
// const num2 = parseFloat(prompt("Enter second number: "));
// switch (choice) {
//   case "+":
//     console.log(add(num1, num2));
//     break;
//   case "-":
//     console.log(sub(num1, num2));
//     break;
//   case "*":
//     console.log(mul(num1, num2));
//     break;
//   case "/":
//     console.log(div(num1, num2));
//     break;

//   default:
//     console.log("Enter a valid option");
//     break;
// }

// // Function constructor
// function Mobile(brand, price, launchDate, ram) {
//   this.brand = brand;
//   this.price = price;
//   this.launchDate = new Date(launchDate);
//   this.ram = ram
// }

// //

// const s10 = new Mobile("Samsung", 50000, "10/11/2022", "6G")
// console.log(s10)
// const s21 = new Mobile("Samsung s21", 120000, "12/12/2021", "16G")
// console.log(s21)


class Phone{
  constructor(brand, price, launchDate){
    this.brand=brand;
    this.price=price;
    this.launchDate = new Date(launchDate)
  }
  getLaunchYear(){
    return this.launchDate.getFullYear();
  }
}

const iPhone = new Phone('iPhone12', 380000, "9/09/2020")
console.log(iPhone)

