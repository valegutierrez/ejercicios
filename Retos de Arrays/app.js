// recibe dos strings y devuelve el promedio de la longitud
function computeAverageLengthOfWords(word1, word2) {
    let result = (word1.length + word2.length)/2;
    return result;
}
console.log(computeAverageLengthOfWords('code', 'programs'));

// devuelve la ubicación de un entero en el array
function getNthElement(array, n) {
    return array[n];
}
console.log(getNthElement([1,2,3,4], 1));

// convierte el doble espaciado en uno simple
function convertDoubleSpaceToSingle(stringToSingle) {
    let arrayOne = stringToSingle.split('  ');
    let singleSpaceString = arrayOne.join(' ');
    return singleSpaceString;
}
console.log(convertDoubleSpaceToSingle('string  con  doble  espacio'));

// devuelve true si se cumplen las condiciones y false si no
function areValidCredentials(name, password){
    if(name.length>3&&password.length>=8){
        return true;
    }
    else {
        return false;
    }
}
console.log(areValidCredentials('usua', 'contraseña'));

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
console.log(findPairForSum([0, 8, 1, 7, 19, 12, 4], 1));

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
console.log(filterOddElements([5,1,2,9,4,]));

// devuelve la cadena más corta dentro del array
function findShortestWordAmongMixedElements(arr){
    let result = '';
    for(i=1; i<arr.length; i++){
        if(parseInt(arr[i--]) < parseInt(arr[i])){
            result = arr[i];
        }
    }
    return result;
}
console.log(findShortestWordAmongMixedElements([4, 'two', 2, 'three']));