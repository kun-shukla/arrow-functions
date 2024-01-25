/**
 * To run this file in Gitpod, use the
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//   return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters

// Single Line Arrow Function With Parameters

// const printMessage = (message) => console.log(message);
// printMessage("Hello there");

// Implicit Returns

// Returning Multiple Lines

let students = [
  {
    name: "John",
    subjects: ["maths", "english", "cad"],
    teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: "Emily",
    subjects: ["science", "maths", "english", "art"],
    teacher: { science: "Iris", maths: "Harry", english: "Joan", art: "Simon" },
    results: { science: 93, maths: 95, english: 80, art: 95 },
  },
  {
    name: "Adam",
    subjects: ["science", "maths", "art"],
    teacher: { science: "Iris", maths: "Harry", art: "Simon" },
    results: { science: 63, maths: 79, art: 95 },
  },
];

// You will create a function using the arrow syntax that should return the average marks of a subject.
// Your function should loop through the array that is passed in. For each student contained within, you should: 1. Check if the subject passed into your function is in said student's results object; 2. If it is, add it to a cumulative total of all results for that subject. 3. Finally, return the average result for the subject.
// You will only be asked to return the average marks for the subject english, but your function must be able to return the average marks if another subject name is used, and the tests will check for this.

// function averageScore(subject) {
//   let scoresArray = [];
//   let subjectScore = 0;
//   for (let i = 0; i < students.length; i++)
//     if (students[i].results.subject) {
//       scoresArray.push(students[i].results.subject);
//     }
//   console.log(scoresArray);
//   for (score of scoresArray) {
//     subjectScore += score;
//   }
//   return subjectScore / scoresArray.length;
// }

// let result = averageScore("english");
// console.log(result);

const averagePoints = (subject) => {
  let pointsArray = [];
  let totalPoints = 0;
  for (eachObject of students) {
    if (eachObject.results[subject]) {
      pointsArray.push(eachObject.results[subject]);
    }
  }
  console.log(pointsArray);
  for (eachItem of pointsArray) {
    totalPoints += eachItem;
  }
  return totalPoints / pointsArray.length;
};
let averageMarks = averagePoints("english");
console.log(averageMarks);
