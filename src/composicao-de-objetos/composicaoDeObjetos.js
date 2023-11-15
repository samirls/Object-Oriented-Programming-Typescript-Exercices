var Motor = /** @class */ (function () {
    function Motor() {
        this.ligado = false;
    }
    Motor.prototype.ligar = function () {
        if (this.ligado === false) {
            this.ligado = true;
            console.log("Motor ligado.");
        }
        else {
            console.log("O motor já está ligado.");
        }
    };
    Motor.prototype.desligar = function () {
        if (this.ligado) {
            this.ligado = false;
            console.log("Motor desligado.");
        }
        else {
            console.log("O motor já está desligado.");
        }
    };
    return Motor;
}());
var Carro = /** @class */ (function () {
    function Carro() {
        this.motor = new Motor();
    }
    Carro.prototype.ligarCarro = function () {
        this.motor.ligar();
    };
    Carro.prototype.desligarCarro = function () {
        this.motor.desligar();
    };
    return Carro;
}());
var meuCarro = new Carro();
meuCarro.ligarCarro();
meuCarro.ligarCarro();
meuCarro.desligarCarro();
meuCarro.desligarCarro();
