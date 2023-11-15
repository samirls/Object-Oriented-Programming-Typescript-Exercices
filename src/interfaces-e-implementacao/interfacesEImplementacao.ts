interface FormaGeometrica {
  calcularArea(): number;
  calcularPerimetro(): number;
}

class Quadrado implements FormaGeometrica {
  constructor(private largura: number, private altura: number) {}

  calcularArea(): number {
      return this.largura * this.altura;
  }

  calcularPerimetro(): number {
      return 2 * (this.largura + this.altura);
  }
}

class Circulo implements FormaGeometrica {
  constructor(private raio: number) {}

  calcularArea(): number {
      return Math.PI * this.raio ** 2;
  }

  calcularPerimetro(): number {
      return 2 * Math.PI * this.raio;
  }
}

const quadrado = new Quadrado(5, 10);
console.log("Área do quadrado:", quadrado.calcularArea());
console.log("Perímetro do quadrado:", quadrado.calcularPerimetro());

const circulo = new Circulo(3);
console.log("Área do círculo:", circulo.calcularArea());
console.log("Perímetro do círculo:", circulo.calcularPerimetro());
