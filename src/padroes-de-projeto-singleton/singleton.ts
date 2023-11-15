class ConfiguracaoApp {
  private static instancia: ConfiguracaoApp;
  private config: Record<string, any>;

  private constructor() {
    // Inicialize as configurações aqui
    this.config = {};
  }

  static getInstance(): ConfiguracaoApp {
    if (!ConfiguracaoApp.instancia) {
      ConfiguracaoApp.instancia = new ConfiguracaoApp();
    }
    return ConfiguracaoApp.instancia;
  }

  getConfig(chave: string): any {
    return this.config[chave];
  }

  setConfig(chave: string, valor: any): void {
    this.config[chave] = valor;
  }
}

// Exemplo de uso
const config1 = ConfiguracaoApp.getInstance();
config1.setConfig('idioma', 'portugues');
console.log(config1.getConfig('idioma')); // Saída: portugues

// Criar outra instância
const config2 = ConfiguracaoApp.getInstance();

// Verificar se ambas as instâncias são iguais
console.log(config1 === config2); // Saída: true

// Ambas as instâncias compartilham a mesma configuração
console.log(config2.getConfig('idioma')); // Saída: portugues
