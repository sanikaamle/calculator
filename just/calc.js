const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            operator = "";
            previousInput = "";
            display.value = "";
        } 
        else if (value === "=") {
            if (previousInput && operator && currentInput) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
                display.value = currentInput;
                previousInput = "";
                operator = "";
            }
        } 
        else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        } 
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
