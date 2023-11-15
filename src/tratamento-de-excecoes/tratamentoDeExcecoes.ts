class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    if (saldoInicial < 0) {
      throw new Error('O saldo inicial não pode ser negativo.');
    }
    this.saldo = saldoInicial;
  }

  getSaldo(): number {
    return this.saldo;
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      throw new Error('O valor do depósito deve ser maior que zero.');
    }
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      throw new Error('O valor do saque deve ser maior que zero.');
    }

    if (valor > this.saldo) {
      throw new Error('Saldo insuficiente para realizar o saque.');
    }

    this.saldo -= valor;
    console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
  }
}

try {
  const minhaConta = new ContaBancaria(1000);

  console.log('Saldo inicial:', minhaConta.getSaldo());

  minhaConta.depositar(500);
  minhaConta.sacar(200);

  console.log('Saldo final:', minhaConta.getSaldo());

  minhaConta.sacar(10000);
} catch (error) {
  console.error(error.message);
}
