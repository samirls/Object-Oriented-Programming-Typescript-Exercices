var Carro = /** @class */ (function () {
    function Carro(modelo, ano, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    Carro.prototype.exibirDetalhes = function () {
        console.log("Modelo: ".concat(this.modelo, ", Ano: ").concat(this.ano, ", Cor: ").concat(this.cor));
    };
    return Carro;
}());
var carro1 = new Carro('Onix', 2022, 'Preto');
var carro2 = new Carro('HB20', 2023, 'Azul');
console.log('Detalhes do Carro 1:');
carro1.exibirDetalhes();
console.log('\nDetalhes do Carro 2:');
carro2.exibirDetalhes();
