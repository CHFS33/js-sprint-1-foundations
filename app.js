"use strict";

//State
const logData = document.getElementById("logData");
const myHobbies = [
  "Photography",
  "Programming",
  "Record Collecting",
  "Smoking food and Grilling",
  "Running",
];

//Logic
logData.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < myHobbies.length; i++) {
    console.log(myHobbies[i]);
  }
});
