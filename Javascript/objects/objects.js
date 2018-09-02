

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
// The best way to build re-usable objects

var students = [];

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function() {
        return "Hi, I am " + this.firstName
+ " and I am " + this.age + " years old";    
    }
}

var student1 = new Student("Jenny", "Craft", 24);
var student2 = new Student("Mark", "Crafton", 44);
var student3 = new Student("Jim", "Sbut", 14);
console.log(student1.greeting());


students.push(new Student("Jennaz", "Laga", 5));
students.push(new Student("Timmy", "Turner", 8));
students.push(new Student("Carl", "Koral", 15));

// for(var i =0; i < students.length; i++) {
//     var student = students[i];
//     console.log(student.greeting());
// }

// When you need to iterate through the properties of
// and object, you can do so with a for-in loop
// Mainly for debuggin purposes
var student = students[0];
for (var key in student) {
    console.log(student[key]);
}

