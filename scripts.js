// Function to add two numbers.
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers.
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers.
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers.
function divide(num1, num2) {
    return num1 / num2;
}

// Function to operate on two numbers.
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1, num2);
        default:
            return "ERROR";
    }
}

// Function to display pushed numbers.
const numbers = [...document.querySelectorAll(".num")];

numbers.forEach(number => number.addEventListener("click", showNum));

function showNum(e) {
    const result = document.querySelector("#result");
    const arr = result.innerHTML.split("");
    arr.push(e.path[0].innerHTML);
    result.innerHTML = arr.join("");
}