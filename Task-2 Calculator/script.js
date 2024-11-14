const display = document.getElementById('display');

// Append number to the display
function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

// Append operator to the display
function appendOperator(operator) {
    const lastChar = display.value[display.value.length - 1];
    if ('+-*/'.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        display.value = eval(display.value) || '';
    } catch (error) {
        display.value = 'Error';
    }
}
