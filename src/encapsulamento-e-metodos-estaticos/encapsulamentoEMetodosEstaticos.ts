class Calculadora {
  private soma(a: number, b: number) {
    return a + b;
  }

  private subtracao(a: number, b: number) {
    return a - b;
  }

  private multiplicacao(a: number, b: number) {
    return a * b;
  }

  private divisao(a: number, b: number) {
    if (b !== 0) {
      return a / b;
    } else {
      console.error('Divisão por zero não existe!');
      return NaN;
    }
  }

  static valorAbsoluto(numero: number) {
    return Math.abs(numero);
  }
}

const minhaCalculadora = new Calculadora();

console.log('Soma:', minhaCalculadora.soma(5, 3));
console.log('Subtração:', minhaCalculadora.subtracao(8, 2));
console.log('Multiplicação:', minhaCalculadora.multiplicacao(4, 6));
console.log('Divisão:', minhaCalculadora.divisao(9, 3));
console.log('Valor Absoluto:', Calculadora.valorAbsoluto(-7));
