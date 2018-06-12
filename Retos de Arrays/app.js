function computeAverageLengthOfWords(word1, word2) {
    let output = (word1.length + word2.length)/2;
    return output;
}
console.log(computeAverageLengthOfWords("code", "programs"));

function getNthElement(array, n) {
    return array[n];
}
console.log(getNthElement([1,2,3,4], 1));

function convertDoubleSpaceToSingle(stringToSingle, separador) {
    let arrayOne = stringToSingle.split(separador);
}
var space = " ";
console.log(convertDoubleSpaceToSingle("Frase  con  doble  espaciado", space));

function findPairForSum(array, number) {
    number = array[x] + array[y];
    return array[x,y];
}

console.log(findPairForSum([1,2,3,4], 7));