var ConfiguracaoApp = /** @class */ (function () {
    function ConfiguracaoApp() {
        // Inicialize as configurações aqui
        this.config = {};
    }
    ConfiguracaoApp.getInstance = function () {
        if (!ConfiguracaoApp.instancia) {
            ConfiguracaoApp.instancia = new ConfiguracaoApp();
        }
        return ConfiguracaoApp.instancia;
    };
    ConfiguracaoApp.prototype.getConfig = function (chave) {
        return this.config[chave];
    };
    ConfiguracaoApp.prototype.setConfig = function (chave, valor) {
        this.config[chave] = valor;
    };
    return ConfiguracaoApp;
}());
// Exemplo de uso
var config1 = ConfiguracaoApp.getInstance();
config1.setConfig('idioma', 'portugues');
console.log(config1.getConfig('idioma')); // Saída: portugues
// Criar outra instância
var config2 = ConfiguracaoApp.getInstance();
// Verificar se ambas as instâncias são iguais
console.log(config1 === config2); // Saída: true
// Ambas as instâncias compartilham a mesma configuração
console.log(config2.getConfig('idioma')); // Saída: portugues
