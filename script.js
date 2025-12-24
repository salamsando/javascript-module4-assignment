
let foods = ["Waakye", "Beans", "Jollof", "Ampesi", "Banku"];


console.log("First food:", foods[0]);
console.log("Last food:", foods[foods.length - 1]);


foods.push("konkonte");
console.log("Updated foods array:", foods);

foods.forEach(function(food) {
  console.log(food);
});





let student = {
  name: "Yaslam",
  age: 20,
  course: "Computer Engineering"
};

console.log(student.name);
console.log(student.age);
console.log(student.course);


let students = [
  { name: "Yaslam", age: 20, course: "Computer Engineering" },
  { name: "Stephen", age: 19, course: "Statistics" },
  { name: "Yaw", age: 22, course: "Food Science" }
];

students.forEach(function(student) {
  console.log(student.name);
});
 




let studentWithMethod = {
  name: "Yaslam",
  age: 20,
  course: "Computer Engineering",
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am learning JavaScript.`);
  }
};

studentWithMethod.greet();

