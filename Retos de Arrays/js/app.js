// recibe dos strings y devuelve el promedio de la longitud
function computeAverageLengthOfWords(word1, word2) {
    let result = (word1.length + word2.length)/2;
    return result;
}

// devuelve la ubicación de un entero en el array
function getNthElement(array, n) {
    return array[n];
}

// convierte el doble espaciado en uno simple
function convertDoubleSpaceToSingle(stringToSingle) {
    let arrayOne = stringToSingle.split('  ');
    let singleSpaceString = arrayOne.join(' ');
    return singleSpaceString;
}

// devuelve true si se cumplen las condiciones y false si no
function areValidCredentials(name, password){
    if(name.length>3&&password.length>=8){
        return true;
    }
    else {
        return false;
    }
}

// encuentra los dos numeros que son la suma del resultado
function findPairForSum(array, number){
    for(i=0; i<array.length; i++){
        for (let j=i+1; j<array.length; j++){
            if(array[i]+array[j] == number){
                let result = [array[i],array[j]];
                return result;
            }
            else {
                continue;
            }
        }
    }
}

// devuelve solo los números impares del array
function filterOddElements(arr) {
    let result = [];
    for(i=0; i<arr.length; i++){
        if ((arr[i] % 2) !== 0){
            result.push(arr[i]);
        }
    }
    return result;
}

// devuelve la palabra más corta dentro del array mezclado
function findShortestWordAmongMixedElements(arr) {
    let shortest = '';
    let formula = arr.filter(index => typeof index === 'string').sort((a, b) => a.length - b.length)[0];
    if (formula === undefined) {
        return shortest;
    } else {
        return formula;
    }
}
console.log(findShortestWordAmongMixedElements([3, 4, 5]));

// devuelve el numero más pequeño dentro del array mezclado
function findSmallestNumberAmongMixedElements(arr) {
    let shortest = '';
    let formula = arr.filter(index => typeof index === 'number').sort((a, b) => a - b)[0];
    if (formula === undefined) {
        return shortest;
    } else {
        return formula;
    }
}
console.log(findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']));

// devuelve la palabra más larga dentro del array mezclado
function getLongestWordOfMixedElements(arr) {
    let shortest = '';
    let formula = arr.filter(index => typeof index === 'string').sort((a, b) => a.length - b.length)[1];
    if (formula === undefined) {
        return shortest;
    } else {
        return formula;
    }
}
console.log(getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]));

// devuelve el numero más grande dentro del array mezclado
function getLargestNumberAmongMixedElements(arr) {
    let shortest = '';
    let formula = arr.filter(index => typeof index === 'number').sort((a, b) => b - a)[0];
    if (formula === undefined) {
        return shortest;
    } else {
        return formula;
    }
}
console.log(getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]));

// devuelve la suma de todos los elementos
function computeSumOfAllElements(arr) {
    let output = 0;
    for(i=0;i<arr.length;i++) {
        output += arr[i];
    }
    return output;
}
console.log(computeSumOfAllElements([1, 2, 3]));

// devuelve suma entre dos enteros
function computeSumBetween(num1, num2) {
    let output = 0;
    for(i=num1;i<num2;i++) {
        output += i;
    }
    return output;
}
console.log(computeSumBetween (2, 5));

// devuelve la palabra más larga entre 3
function getLongestOfThreeWords(word1, word2, word3){
    let arrayOne = [word1, word2, word3]
    let longest = '';
    for(i = 0; i < arrayOne.length; i++){
      if(arrayOne[i].length > longest.length){
        longest = arrayOne[i];
      }
    }
    return longest;
}
console.log(getLongestOfThreeWords('wdty', 'tres', 'palabras'));

// devuelve la palabra más corta entre 3
function findShortestOfThreeWords(word1, word2, word3){
    let arrayOne = [word1, word2, word3]
    let shortest = word1;
    for(i = 0; i < arrayOne.length; i++){
      if(arrayOne[i].length < shortest.length){
        shortest = arrayOne[i];
      }
    }
    return shortest;
}
console.log(findShortestOfThreeWords('a', 'dos', 'tres'));

// calcula cuenta con impuestos y propina
function calculateBillTotal(preTaxAndTipAmount) {
    let tip = (preTaxAndTipAmount/100)*15;
    let taxes = (preTaxAndTipAmount/100)*9.5;
    let total = (preTaxAndTipAmount+tip+taxes);
    return total;
}
console.log(calculateBillTotal(20));

// devuelve una cadena con el grado correspondiente a un puntaje
function convertScoreToGrade(score) {
    if (score < 0 || score > 100) {
      return 'PUNTUACION INVALIDA';
    }
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
}
console.log(convertScoreToGrade(1));