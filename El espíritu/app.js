//El espíritu : 2.elevado(2);
class Numero{
    constructor(num){
        this.num = num;
    }
    elevado(otroNumero/*Es otra instancia de Numero*/){
        let respuesta = 1;
        for(let i = 0; i < otroNumero.num; ++i){
            respuesta *= this.num;
        }
        return new Numero(respuesta);
    }
    sumar(otroNumero){
        let respuesta = 0;
        respuesta += (this.num + otroNumero.num);
        return new Numero(respuesta);
    }
    restar(otroNumero){
        let respuesta = 0;
        respuesta += (this.num - otroNumero.num);
        return new Numero(respuesta);
    }
    multiplicacion(otroNumero){
        let respuesta = 0;
        for(let i = 0; i < otroNumero.num; i++){
            respuesta += this.num;
        }
        return new Numero(respuesta);
    } 
}