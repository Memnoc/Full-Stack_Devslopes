

// Creating objects

// Method 1
// var student0 = {
//     firstName: "Jayne",
//     lastName: "Loo",
//     age: 8,
// }
    

// // Method 2
// var student1 = new Object();
// student1.firstName = "John";
// student1.lastName = "Parker";
// student1.age = 18;

// // Method 3
// var student2 = {};
// student2.firstName = "Zach";
// student2.lastName = "Bono";
// student2.age = 10;

// var students = [];
// students.push(student0);
// students.push(student1);
// students.push(student2);

// for(var i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// console.log(student0.greeting);


// This is an object constructor

function student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function() {
        return "Hi, I am " + this.firstName
+ " and I am " + this.age + " years old";    
    }
}

var student1 = new student("Jenny", "Craft", 24);
var student2 = new student("Mark", "Crafton", 44);
var student3 = new student("Jim", "Sbut", 14);
console.log(student1.greeting());




