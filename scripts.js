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