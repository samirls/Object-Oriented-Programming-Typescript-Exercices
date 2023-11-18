var usePrompt = require("prompt-sync")();
var MeuCarro = /** @class */ (function () {
    function MeuCarro(modelo, ano, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    MeuCarro.prototype.exibirDetalhes = function () {
        console.log("Modelo: ".concat(this.modelo, ", Ano: ").concat(this.ano, ", Cor: ").concat(this.cor));
    };
    return MeuCarro;
}());
/* const carro1 = new MeuCarro('Onix', 2022, 'Preto');
const carro2 = new MeuCarro('HB20', 2023, 'Azul');

console.log('Detalhes do Carro 1:');
carro1.exibirDetalhes();

console.log('\nDetalhes do Carro 2:');
carro2.exibirDetalhes(); */
///// CLI ///////////////////
function exibirDetalhesCarros() {
    var carro1 = new MeuCarro('Onix', 2022, 'Preto');
    var carro2 = new MeuCarro('HB20', 2023, 'Azul');
    console.log('Detalhes do Carro 1:');
    carro1.exibirDetalhes();
    console.log('\nDetalhes do Carro 2:');
    carro2.exibirDetalhes();
    main();
}
function main() {
    console.log('Bem-vindo à CLI de Carros!');
    console.log('Digite 1 para ver os carros listados.');
    var userInput = usePrompt();
    if (userInput === '1') {
        exibirDetalhesCarros();
    }
    else {
        console.log('Comando inválido. Saindo do aplicativo.');
    }
}
main();
