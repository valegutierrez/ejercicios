function comida() {
    var orden = document.getElementById('ordenMessage').value;
    if (orden=='1') {
        console.log('Ordenar ceviche');
    }
    else if (orden=='2') {
        console.log('Ordenar tacos al pastor');
    }
    else if (orden=='3') {
        console.log('Ordenar empanada chilena');
    }
    else {
        console.log('Ordenar hamburguesa');
    }
}