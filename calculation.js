
document.addEventListener('DOMContentLoaded', function() {
    loadHistory();
});


function loadHistory() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    const historyList = document.getElementById('historyList');

    historyList.innerHTML = '';


    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item.equation} = ${item.result}`;
        li.onclick = () => {
            document.getElementById('display').value = item.equation;
        };
        historyList.appendChild(li);
    });
}


function saveHistory(expression, result) {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];


    const historyItem = {
        equation: expression,
        result: result
    };

    history.push(historyItem);

    localStorage.setItem('calculatorHistory', JSON.stringify(history));


    updateHistoryUI();
}

function updateHistoryUI() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    const historyList = document.getElementById('historyList');

    historyList.innerHTML = '';


    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item.equation} = ${item.result}`;
        li.onclick = () => {
            document.getElementById('display').value = item.equation;
        };
        historyList.appendChild(li);
    });
}


function calculate() {
    let expression = document.getElementById("display").value;

    try {

        let result = eval(expression);


        document.getElementById("display").value = result;


        saveHistory(expression, result);

    } catch (error) {

        document.getElementById("display").value = "Error";
    }
}


function clearDisplay() {
    document.getElementById("display").value = '';
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
