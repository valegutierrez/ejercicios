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

// devuelve la cadena más corta dentro del array
function findShortestWordAmongMixedElements(arr) {
    for(i=0; i<arr.length; i++){
        for (j=i+1; j<arr.length; j++){
            if(arr[i].length < arr[j].length && typeof(arr[i]) === 'string') {
                return arr[i];
            } else if (arr[j].length < arr[i].length && typeof(arr[j]) === 'string') {
                return arr[j];
            } else if (arr[i].length === arr[j].length && typeof(arr[i]) === 'string') {
                return arr[i];
            }
        }
    }
}
console.log(findShortestWordAmongMixedElements([4, 3]));

// devuelve la suma de todos los elementos
function computeSumOfAllElements(arr) {
    let output = 0;
    for(i=0;i<arr.length;i++) {
        output += arr[i];
    }
    return output;
}
console.log(computeSumOfAllElements([1, 2, 3]));