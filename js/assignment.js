"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

// Q1.answerOne - output1
function updateAnswerOne() {
    answerOneEl.textContent = todos.join(",");  
}

// Q2.answerTwo - output2
function updateAnswerTwo() {
    answerTwoEl.textContent = todos[2];
}

//Q3. answerthree - output4
function removeLastValue() {
    popValue = todos.pop();
    answerFourEl.textContent = todos;
}

//Q7. Output
function removeFirstValue() {
    shiftValue = todos.shift();
    answerSixEl.textContent = todos;
}

//Q8
function addShiftAndPopValues() {
    todos.push(shiftValue,popValue);

    //answerSixEl.textContent = todos;
}

function updateAnswerFour() {
   // answerFiveEl.textContent = todos;
    //answerSixEl.textContent = todos(',')
    //answerThreeEl.textContent = todos[3,2,1,0];   
}

//answer 5
function reverseTodoList() {
    reversed = todos.reverse(popValue, shiftValue);
    answerFiveEl.textContent = todos;
}

function updateAnswerFive() {
    //todos.push(popValue);
    //todos.push(shiftValue);
    //answerFourEl.textContent = todos;
    answerFiveEl.textContent = todos;
 // answerSixEl.textContent = todos;
}

function updateAnswerSix() {
    answerSixEl.textContent = todos;
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    removeFirstValue();
    addShiftAndPopValues();
    updateAnswerFour();
    reverseTodoList();
    updateAnswerFive();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
