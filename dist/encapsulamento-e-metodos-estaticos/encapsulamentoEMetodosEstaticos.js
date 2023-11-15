class Calculadora {
    soma(a, b) {
        return a + b;
    }
    subtracao(a, b) {
        return a - b;
    }
    multiplicacao(a, b) {
        return a * b;
    }
    divisao(a, b) {
        if (b !== 0) {
            return a / b;
        }
        else {
            console.error('Divisão por zero não existe!');
            return NaN;
        }
    }
    static valorAbsoluto(numero) {
        return Math.abs(numero);
    }
}
const minhaCalculadora = new Calculadora();
console.log('Soma:', minhaCalculadora.soma(5, 3));
console.log('Subtração:', minhaCalculadora.subtracao(8, 2));
console.log('Multiplicação:', minhaCalculadora.multiplicacao(4, 6));
console.log('Divisão:', minhaCalculadora.divisao(9, 3));
// Método estático para valor absoluto
console.log('Valor Absoluto:', Calculadora.valorAbsoluto(-7));
