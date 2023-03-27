var arrayNumber = [];

function addNumber() {
    let getNumber = document.getElementById('inputNumber').value;
    let getSelect = document.getElementById('displayNumbers');
    let elementOption = document.createElement('option');

    getNumber = Number(getNumber);

    if (getNumber > 100 || getNumber < 1) {
        alert('[ERRO] POR FAVOR, INSIRA UM VALOR ENTRE 1 E 100. [ERRO]');
    } else {
        arrayNumber.push(getNumber);
        elementOption.innerHTML = `valor ${getNumber} adicionado.`
        getSelect.appendChild(elementOption);
        // console.log(typeof getNumber);
        // console.log(arrayNumber.length);
        // console.log(arrayNumber);
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
        let verif = biggerNumber[i];
        var largeNumber;
        if (verif > largeNumber){
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
        let verif = smallNumber[i];
        var minorNumber;
        if (verif < minorNumber) {
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

    for (let index = 0; index < sumOfNumbers.length; index++) {
        var sum = sum + sumOfNumbers[index];
        
    }

    pElement.innerHTML = `A soma de todos os números informados é: ${sum}.`;
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
    }
}