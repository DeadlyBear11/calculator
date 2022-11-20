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
            if (num2 === 0) {
                return "(T_T) why tho?";
            }
            return divide(num1, num2);
        default:
            return "ERROR";
    }
};

// Constant to show the current operation on the display.
const currOp = document.querySelector("#current-operation");

// Process to display pushed numbers.
const numbers = [...document.querySelectorAll(".num")];

numbers.forEach(number => number.addEventListener("click", showNum));

function showNum(e) {
    const result = document.querySelector("#result");
    const arrDisplay = result.innerHTML.split("");
    arrDisplay.push(e.path[0].innerHTML);
    result.innerHTML = arrDisplay.join("");
};

// Process to operate on the numbers.
const opBtns = [...document.querySelectorAll(".op")];
const equalBtn = document.querySelector(".equal");

// Save the first operand and operator in arrNum1Op.
let arrNum1Op = [];

opBtns.forEach(op => op.addEventListener("click", saveNum1Op));
opBtns.forEach(op => op.addEventListener("click", checkIfOperate));

function saveNum1Op(e) {
    const num1 = result.innerHTML;
    const operator = e.path[0].innerHTML;
    arrNum1Op.push(num1, operator);
    result.innerHTML = "";
    currOp.innerHTML = num1;

    // Check if an operator button was pushed without a new number.
    if (arrNum1Op[2] === "") {
        arrNum1Op.splice(1, 2);
        currOp.innerHTML = arrNum1Op[0];
    } else if (arrNum1Op[0] === "") {
        arrNum1Op.splice(0, 2);
    }

    return arrNum1Op;
};

// Check if it has to chain operations.
function checkIfOperate() {
    if (arrNum1Op.length === 4) {
        const num1 = +arrNum1Op[0];
        const operator = arrNum1Op[1];
        const num2 = +arrNum1Op[2];
        const answer = operate(num1, num2, operator);
        // Check for division by zero.
        if (typeof answer === "string") {
            currOp.innerHTML = answer;
            result.innerHTML = "";
            arrNum1Op = [];
            return;
        }
        const currentResult = Math.round(100 * answer) / 100;
        arrNum1Op = [currentResult, arrNum1Op[3]];
        currOp.innerHTML = currentResult;
    } return;
};

// Keep operator button in a different color while it awaits for input.
opBtns.forEach(op => op.addEventListener("click", keepColored));

function keepColored(e) {
    opBtns.forEach(op => {
        if (op.classList[2]) {
            op.classList.toggle("btn-pressed");
        };
    });

    e.path[0].classList.toggle("btn-pressed");
};

function clearColored() {
    opBtns.forEach(op => {
        if (op.classList[2]) {
            op.classList.toggle("btn-pressed");
        };
    });
};

// Operate on first operand, operator and second operand.
equalBtn.addEventListener("click", operateOnAll);

function operateOnAll() {
    // Check if there's anything to operate with.
    if (arrNum1Op.length < 2 || result.innerHTML === "" || arrNum1Op[0] === "") {
        return;
    }

    const num2 = +result.innerHTML;
    const num1 = +arrNum1Op[0];
    const operator = arrNum1Op[1];
    const answer = operate(num1, num2, operator);
    // Check for division by zero.
    if (typeof answer === "string") {
        currOp.innerHTML = answer;
        result.innerHTML = "";
        arrNum1Op = [];
        return;
    }
    result.innerHTML = Math.round(100 * answer) / 100;
    arrNum1Op = [];
    currOp.innerHTML = "";
    clearColored();
};

// Process for the clear-button to work.
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    result.innerHTML = "";
    arrNum1Op = [];
    currOp.innerHTML = "";
});

clearBtn.addEventListener("click", clearColored);
