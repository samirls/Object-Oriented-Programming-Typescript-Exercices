class Carro {
    constructor(modelo, ano, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    exibirDetalhes() {
        console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }
}
const carro1 = new Carro('Onix', 2022, 'Preto');
const carro2 = new Carro('HB20', 2023, 'Azul');
console.log('Detalhes do Carro 1:');
carro1.exibirDetalhes();
console.log('\nDetalhes do Carro 2:');
carro2.exibirDetalhes();
