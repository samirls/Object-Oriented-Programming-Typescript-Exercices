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


