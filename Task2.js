let studentName = prompt("Enter student name:");
let age = parseInt(prompt("Enter age:"));
let cgpa = parseFloat(prompt("Enter CGPA:"));
let status = prompt("Enter student status:");
let grade = prompt("Enter grade:");

console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("CGPA: " + cgpa);
console.log("Status: " + status);
console.log("Grade: " + grade);

let marks = parseInt(prompt("Enter marks:"));

if (marks >= 80) {
    console.log("Grade: A+");
}
else if (marks >= 70) {
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Grade: B");
}
else {
    console.log("Grade: F");
}