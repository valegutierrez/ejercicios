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
    dividir(otroNumero){
        if(otroNumero.num == 0){
            return new Numero(Infinity);
        }
        let respuesta = 0;
        for(let resto = this.num;;respuesta++){
            resto-= otroNumero.num;
            if (resto < 0){
                break;
            }
        }
        return new Numero(respuesta);
    }
}
let cero = new Numero(0);
let uno = new Numero(1);
let dos = new Numero(2);
let tres = new Numero(3);

console.assert(uno.sumar(dos).num == tres.num);
console.assert(tres.restar(dos).num == uno.num);
console.assert(uno.multiplicacion(dos).num == dos.num);
console.assert(tres.multiplicacion(cero).num == cero.num);