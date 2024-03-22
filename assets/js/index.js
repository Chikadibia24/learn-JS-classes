class Student {
  constructor(nameP, ageP, hasPaidP) {
    this.name = nameP;
    this.age = ageP;
    this.hasPaid = hasPaidP;
  }
  printName() {
    return `The name of this student is ${this.name}`;
  }
  printAge() {
    return `The age of this student is ${this.age}`
  }
  printEDonPay(day) {
    if (this.hasPaid) {
      return `${this.name} aged ${this.age} don pay on ${day}`;
    } else {
      return `${this.name} aged ${this.age} never pay.`;
    }
  }
}

//Get date
let date = new Date(2024, 2, 6, 11, 16, 20);
//date.toDateString();

const student1HasPaid = new Student("Ifenna", 12, true);
const student2HasNotPaid = new Student("Johnson", 13, false);

console.log(student1HasPaid.printEDonPay(date));
console.log(student2HasNotPaid.printEDonPay());


const student1 = new Student("Ifenna", 12, true);
console.log(student1.name);
console.log(student1.printAge());

//A new completely separate code stats below;



const ALTSchoolTodoListing = require("./ALTStudentsTodo");

const { SecurityTodo } = require("./SecurityTraineeTodo");


console.log(ALTSchoolTodoListing.TodoList);
console.log(SecurityTodo.TodoList);
