const usePrompt = require("prompt-sync")();

class MeuCarro {
  modelo: string;
  ano: number;
  cor: string;

  constructor(modelo: string, ano: number, cor: string) {
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }

  exibirDetalhes(): void {
    console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
  }
}

/* const carro1 = new MeuCarro('Onix', 2022, 'Preto');
const carro2 = new MeuCarro('HB20', 2023, 'Azul');

console.log('Detalhes do Carro 1:');
carro1.exibirDetalhes();

console.log('\nDetalhes do Carro 2:');
carro2.exibirDetalhes(); */



///// CLI ///////////////////

function exibirDetalhesCarros(): void {
  const carro1 = new MeuCarro('Onix', 2022, 'Preto');
  const carro2 = new MeuCarro('HB20', 2023, 'Azul');

  console.log('Detalhes do Carro 1:');
  carro1.exibirDetalhes();

  console.log('\nDetalhes do Carro 2:');
  carro2.exibirDetalhes();
  main();
}

function main(): void {
  console.log('Bem-vindo à CLI de Carros!');
  console.log('Digite 1 para ver os carros listados.');
  let userInput = usePrompt();

  if (userInput === '1') {
    exibirDetalhesCarros();
  } else {
    console.log('Comando inválido. Saindo do aplicativo.');
  }
}

main();