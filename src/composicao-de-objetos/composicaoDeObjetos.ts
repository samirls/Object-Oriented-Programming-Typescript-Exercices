class Motor {
  private ligado: boolean = false;

  ligar(): void {
    if (this.ligado === false) {
      this.ligado = true;
      console.log("Motor ligado.");
    } else {
      console.log("O motor já está ligado.");
    }
  }

  desligar(): void {
    if (this.ligado) {
      this.ligado = false;
      console.log("Motor desligado.");      
    } else {
      console.log("O motor já está desligado.");
    }
  }
}

class Carro {
  private motor: Motor;

  constructor() {
    this.motor = new Motor();
  }

  ligarCarro(): void {
    this.motor.ligar();
  }

  desligarCarro(): void {
    this.motor.desligar();
  }
}

const meuCarro = new Carro();

meuCarro.ligarCarro();
meuCarro.ligarCarro();
meuCarro.desligarCarro();
meuCarro.desligarCarro();
