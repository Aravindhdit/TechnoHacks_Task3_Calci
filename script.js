// script.js
let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function allClear() {
    display.innerText = '';
}

function appendToDisplay(value) {
    display.innerText += value;
}

function backspace() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
