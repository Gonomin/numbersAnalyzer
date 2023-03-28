var arrayNumber = [];

document.querySelector('p input').addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        addNumber();
    }
});

function addNumber() {
    let getNumber = document.getElementById('inputNumber').value;
    let getSelect = document.getElementById('displayNumbers');
    let elementOption = document.createElement('option');

    getNumber = Number(getNumber);

    if (getNumber > 100 || getNumber < 1) {
        alert('[ERRO] POR FAVOR, INSIRA UM VALOR ENTRE 1 E 100. [ERRO]');
    } else if (arrayNumber.indexOf(getNumber) != -1) {
        alert('[ERRO] INSIRA OUTRO NÚMERO, ESSE NÚMERO JÁ FOI INFORMADO! [ERRO]');
    } else {
        arrayNumber.push(getNumber);
        elementOption.innerHTML = `valor ${getNumber} adicionado.`
        getSelect.appendChild(elementOption);
    }
    document.getElementById('inputNumber').value = '';
}

let registeredNumbers = (registeredNumbers) => {
    let getDivRes = document.getElementById('res');
    let pElement = document.createElement('p');

    pElement.innerHTML = `Temos, ao todo, um total de ${registeredNumbers.length} números cadastrados.`;

    while (getDivRes.childElementCount != 0) {
        getDivRes.removeChild(getDivRes.firstChild);
    }

    getDivRes.appendChild(pElement);
}

let biggerNumber = (biggerNumber) => {
    let pElement = document.createElement('p');
    let getDivRes = document.getElementById('res');

    for (let i = 0; i <= biggerNumber.length; i++) {
        let verifBigger = biggerNumber[i];
        var largeNumber;
        if (verifBigger > largeNumber) {
            largeNumber = biggerNumber[i];
        }
        if (largeNumber == undefined) {
            largeNumber = biggerNumber[0];
        }
    }

    pElement.innerHTML = `O maior valor informado foi ${largeNumber}.`;
    getDivRes.appendChild(pElement);
}

let smallNumber = (smallNumber) => {
    let pElement = document.createElement('p');
    let getDivRes = document.getElementById('res');

    for (let i = 0; i <= smallNumber.length; i++) {
        let verifSmall = smallNumber[i];
        var minorNumber;
        if (verifSmall < minorNumber) {
            minorNumber = smallNumber[i];
        }
        if (minorNumber == undefined) {
            minorNumber = smallNumber[0];
        }
    }

    pElement.innerHTML = `O menor valor informado foi ${minorNumber}.`;
    getDivRes.appendChild(pElement);
}

let sumOfNumbers = (sumOfNumbers) => {
    let pElement = document.createElement('p');
    let getDivRes = document.getElementById('res');

    for (let i = 0, resultSum = 0; i < sumOfNumbers.length; i++) {
        resultSum = sumOfNumbers[i] + resultSum;
        pElement.innerHTML = `A soma de todos os números informados é: ${resultSum}.`;
        getDivRes.appendChild(pElement);
    }
}

let average = (average) => {
    let pElement = document.createElement('p');
    let getDivRes = document.getElementById('res');
    let sumAverage = 0;

    for (let i in average) {
        sumAverage = sumAverage + average[i];
    }

    let resultAverage = sumAverage / average.length;

    pElement.innerHTML = `A média de todos os números informados é: ${resultAverage.toFixed(2)}.`;
    getDivRes.appendChild(pElement);
}

function displayResults() {
    if (document.getElementById('displayNumbers').childElementCount == 0) {
        alert('[ERRO] POR FAVOR, INSIRA ALGUM VALOR ANTES DE FINALIZAR. [ERRO]')
    } else {
        registeredNumbers(arrayNumber);
        biggerNumber(arrayNumber);
        smallNumber(arrayNumber);
        sumOfNumbers(arrayNumber);
        average(arrayNumber);
    }
}