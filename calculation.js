// Load history from local storage when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadHistory();
});

// Function to load history from local storage
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    const historyList = document.getElementById('historyList');

    historyList.innerHTML = ''; // Clear existing history

    // Render history items
    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item.equation} = ${item.result}`;
        li.onclick = () => { // Set onclick handler to load history item into display
            document.getElementById('display').value = item.equation;
        };
        historyList.appendChild(li);
    });
}

// Function to save history to local storage
function saveHistory(expression, result) {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

    // Create history item object
    const historyItem = {
        equation: expression,
        result: result
    };

    // Add new history item to history (limit to 10 items)
    history.push(historyItem);
    if (history.length > 10) {
        history.shift(); // Remove oldest item if history exceeds 10 items
    }

    localStorage.setItem('calculatorHistory', JSON.stringify(history));

    // Update the history list immediately after saving
    updateHistoryUI();
}

// Function to update the history list in the UI
function updateHistoryUI() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    const historyList = document.getElementById('historyList');

    historyList.innerHTML = ''; // Clear existing history

    // Render history items
    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item.equation} = ${item.result}`;
        li.onclick = () => { // Set onclick handler to load history item into display
            document.getElementById('display').value = item.equation;
        };
        historyList.appendChild(li);
    });
}

// Function to handle calculation
function calculate() {
    let expression = document.getElementById("display").value;

    try {
        // Evaluate the expression
        let result = eval(expression);

        // Display the result
        document.getElementById("display").value = result;

        // Save expression and result to history
        saveHistory(expression, result);

    } catch (error) {
        // Display error message if calculation fails
        document.getElementById("display").value = "Error";
    }
}

// Function to clear display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Function to add value to display
function addToDisplay(value) {
    let display = document.getElementById("display");
    display.value += value;
}

// Function to handle backspace
function backSpace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Other functions like squareRoot, base10Log, pi, e, power, etc.
function squareRoot() {
    addToDisplay("Math.sqrt(");
}

function base10Log() {
    addToDisplay("Math.log10(");
}

function pi() {
    addToDisplay("Math.PI");
}

function e() {
    addToDisplay("Math.E");
}

function power() {
    addToDisplay("**");
}
