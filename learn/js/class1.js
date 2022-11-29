// const firstName = "Michael"
// const lastName = "Olusegun"
// const languages = "html, css,  javascript"
// string methods
// Array
// let framework = ["React", "Angular", "Vue", "Electron", "Nextjs", 'Django'];
// let databases = new Array("Mongodb", "Oracle", "sqlite", "postgreSql")

// Object in Javascript
// let employee = {
//   id: 101,
//   firstname: "James",
//   lastName: "John",
//   username: "Pendi",
//   age: 20,
//   address: {
//     city: "lagos",
//     country: "Nigeria"
//   },
//   skills: ["html", "css", "javascript"],
//   // method
//   action: function(){
//     console.log("Working to the moon")
//   }
// }
// // output a variable of any name with state of origin lagos from the object
// // console.log(`My name is ${employee.firstname} from ${employee.address.city} state. my programming language is ${employee.skills[2]}`)
// console.log("My name is " + employee.firstname +" from "+ employee.address.city +" state. my programming language is "+ employee.skills[2])
// // console.log(employee.firstname)
// const {firstname, lastName, skills,action} = employee
// console.log(firstname, lastName)
// // console.log(employee)
// // console.log(employee.skills[2])
// // console.log(employee.action())
// console.log(action())

// Array of Object
// let employees = [
//   {
//     id: 101,
//     firstName: "Monday",
//     lastName: "Jonathan",
//   },
//   {
//     id: 102,
//     firstName: "Tunde",
//     lastName: "Olaranwaju",
//   },
//   {
//     id: 103,
//     firstName: "James",
//     lastName: "Epkoma",
//   },
//   {
//     id: 104,
//     firstName: "Rita",
//     lastName: "Dominic",
//   }
// ];
// Accessing the array of an object
// console.log(employees)
// // converting to JSON file
// const employeeJSON = JSON.stringify(employees)
// console.log(employeeJSON)

// const employeeBackend = JSON.parse(employeeJSON)
// console.log(employeeBackend)

// Loop
// For loop, while loop, forEach, for-of loop
let employees = [
  {
    id: 101,
    firstName: "Monday",
    lastName: "Jonathan",
  },
  {
    id: 102,
    firstName: "Tunde",
    lastName: "Olaranwaju",
  },
  {
    id: 103,
    firstName: "James",
    lastName: "Epkoma",
  },
  {
    id: 104,
    firstName: "Rita",
    lastName: "Dominic",
  },
  {
    id: 105,
    firstName: "Rita",
    lastName: "Rachel",
  },
];
// For l
// var i
// for (i=0; i <= employees.length; i++ ) {
//   console.log(employees[i].firstName);
// }
// // While loop
// let i=0;
// while( i<employees.length){
//   console.log(employees[i].lastName);
//   i++
// }

// // ES6 forEach, map, filter
// employees.forEach((emp)=>{
//   console.log(emp.firstName)
// })
// // Map
// employees.map((employee)=>{
//   console.log(employee.firstName)
// })
// Filter
const employee = employees.filter((emp)=>{
  return emp.firstName=="Rita"
})
console.log(employee)
const employer = employees.filter((emp)=>{
  return emp.firstName=="Rita"
}).map((empData)=>{
  return empData.lastName;
})
console.log(employer)