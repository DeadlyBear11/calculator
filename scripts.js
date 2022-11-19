// Function to add two numbers.
function add(num1, num2) {
    return num1 + num2;
};

// Function to subtract two numbers.
function subtract(num1, num2) {
    return num1 - num2;
};

// Function to multiply two numbers.
function multiply(num1, num2) {
    return num1 * num2;
};

// Function to divide two numbers.
function divide(num1, num2) {
    return num1 / num2;
};

// Function to operate on two numbers.
function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "ERROR";
    }
};

// Function to display pushed numbers.
const numbers = [...document.querySelectorAll(".num")];

numbers.forEach(number => number.addEventListener("click", showNum));

function showNum(e) {
    const result = document.querySelector("#result");
    const arrDisplay = result.innerHTML.split("");
    arrDisplay.push(e.path[0].innerHTML);
    result.innerHTML = arrDisplay.join("");
};

// Function to operate on the numbers.
const addBtn = document.querySelector(".add");
const subBtn = document.querySelector(".sub");
const divBtn = document.querySelector(".div");
const mulBtn = document.querySelector(".mul");
const equalBtn = document.querySelector(".equal");

// Save the first operand and operator in arrNum1Op.
let arrNum1Op = [];
addBtn.addEventListener("click", saveNum1Op);

function saveNum1Op(e) {
    const num1 = result.innerHTML;
    const operator = e.path[0].innerHTML;
    arrNum1Op.push(num1, operator);
    result.innerHTML = "";
    return arrNum1Op;
};

// Operate on first operand, operator and second operand.
equalBtn.addEventListener("click", operateOnAll);

function operateOnAll() {
    const num2 = +result.innerHTML;
    const num1 = +arrNum1Op[0];
    const operator = arrNum1Op[1];
    result.innerHTML = operate(num1, num2, operator);
};