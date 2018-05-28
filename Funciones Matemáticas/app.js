function formula() {
    var sumado = function add(x, y) {
        return x += y;
    }

    const c = sumado(9824, 777);

    var multiplicado = function multiply(a, b) {
        return (a * b);
    }

    const resultado = multiplicado(36325, c);
    console.log(resultado);
}