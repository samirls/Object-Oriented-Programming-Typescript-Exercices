module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)']
}

//arquivo usado para teste de JS em todas as pastas que contenham tests spec test etc
//este arquivo nao esta sendo usado
//estou usando o arquivo jest.config.js que está no root por conter types de typescript