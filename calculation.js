
document.addEventListener('DOMContentLoaded', function() {
    loadHistory();
});

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    const historyList = document.getElementById('historyList');

    historyList.innerHTML = '';


    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item}`;
        li.onclick = () => {
            document.getElementById('display').value = item;
        };
        historyList.appendChild(li);
    });
}


function saveHistory(expression) {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

    history.push(expression);

    localStorage.setItem('calculatorHistory', JSON.stringify(history));


    updateHistoryUI();
}


function updateHistoryUI() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    const historyList = document.getElementById('historyList');

    historyList.innerHTML = '';

    // Render history items
    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item}`;
        li.onclick = () => {
            document.getElementById('display').value = item;
        };
        historyList.appendChild(li);
    });
}


function calculate() {
    let expression = document.getElementById("display").value;

    try {

        let result = eval(expression);

        // Display the result
        document.getElementById("display").value = result;


        saveHistory(expression);

    } catch (error) {

        document.getElementById("display").value = "Error";
    }
}

function addToDisplay(value) {
    let display = document.getElementById("display");
    display.value += value;
}


function backSpace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

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
