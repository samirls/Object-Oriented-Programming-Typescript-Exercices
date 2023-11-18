var userPrompt = require("prompt-sync")();
var colors = require('colors');
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }
    Livro.prototype.emprestar = function () {
        console.log("Livro \"".concat(this.titulo, "\" emprestado."));
    };
    Livro.prototype.devolver = function () {
        console.log("Livro \"".concat(this.titulo, "\" devolvido."));
    };
    return Livro;
}());
var Autor = /** @class */ (function () {
    function Autor(nome, dataNascimento, nacionalidade) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.nacionalidade = nacionalidade;
        this.livros = [];
    }
    Autor.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
        console.log("Livro \"".concat(livro.titulo, "\" adicionado ao autor ").concat(this.nome, "."));
    };
    Autor.prototype.removerLivro = function (livro) {
        var index = this.livros.indexOf(livro);
        if (index !== -1) {
            this.livros.splice(index, 1);
            console.log("Livro \"".concat(livro.titulo, "\" removido do autor ").concat(this.nome, "."));
        }
    };
    return Autor;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nome, email) {
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = [];
    }
    Usuario.prototype.emprestarLivro = function (livro) {
        this.livrosEmprestados.push(livro);
        livro.emprestar();
    };
    Usuario.prototype.devolverLivro = function (livro) {
        var index = this.livrosEmprestados.indexOf(livro);
        if (index !== -1) {
            this.livrosEmprestados.splice(index, 1);
            livro.devolver();
        }
    };
    return Usuario;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
        this.autores = [];
        this.usuarios = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
        console.log("Livro \"".concat(livro.titulo, "\" adicionado \u00E0 biblioteca."));
    };
    Biblioteca.prototype.removerLivro = function (livro) {
        var index = this.livros.indexOf(livro);
        if (index !== -1) {
            this.livros.splice(index, 1);
            console.log("Livro \"".concat(livro.titulo, "\" removido da biblioteca."));
        }
    };
    Biblioteca.prototype.adicionarAutor = function (autor) {
        this.autores.push(autor);
        console.log("Autor \"".concat(autor.nome, "\" adicionado \u00E0 biblioteca."));
    };
    Biblioteca.prototype.removerAutor = function (autor) {
        var index = this.autores.indexOf(autor);
        if (index !== -1) {
            this.autores.splice(index, 1);
            console.log("Autor \"".concat(autor.nome, "\" removido da biblioteca."));
        }
    };
    Biblioteca.prototype.adicionarUsuario = function (usuario) {
        this.usuarios.push(usuario);
        console.log("Usu\u00E1rio \"".concat(usuario.nome, "\" adicionado \u00E0 biblioteca."));
    };
    Biblioteca.prototype.removerUsuario = function (usuario) {
        var index = this.usuarios.indexOf(usuario);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
            console.log("Usu\u00E1rio \"".concat(usuario.nome, "\" removido da biblioteca."));
        }
    };
    Biblioteca.prototype.buscarLivrosPorAutor = function (autor) {
        return this.livros.filter(function (livro) { return livro.autor === autor; });
    };
    Biblioteca.prototype.listarLivrosEmprestados = function () {
        return this.usuarios.reduce(function (livrosEmprestados, usuario) {
            return livrosEmprestados.concat(usuario.livrosEmprestados);
        }, []);
    };
    return Biblioteca;
}());
// Exemplo de Uso:
/* const autor1 = new Autor('Autor 1', '01/01/1970', 'Nacionalidade 1');
const livro1 = new Livro('Livro 1', autor1, 2000, 'Gênero 1');

const usuario1 = new Usuario('Usuário 1', 'usuario1@email.com');

const biblioteca = new Biblioteca();
biblioteca.adicionarAutor(autor1);
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarUsuario(usuario1);

usuario1.emprestarLivro(livro1);

console.log('Livros emprestados:', biblioteca.listarLivrosEmprestados()); */
// CLI ///////////////////////////////////////
var biblioteca = new Biblioteca();
function main() {
    console.log(colors.red('################################################################'));
    console.log(colors.blue('########## Sistema Biblioteca completa da ADA / Ifood ##########'));
    console.log(colors.red('################################################################'));
    console.log(colors.green('Made by samirls: https://github.com/samirls'));
    console.log('Escolha uma opção:');
    console.log('1 - Ver os livros disponíveis');
    console.log('2 - Adicionar livro à biblioteca');
    console.log('3 - Remover livro da biblioteca');
    console.log('4 - Emprestar livro');
    console.log('5 - Devolver livro');
    console.log('6 - Adicionar usuário à biblioteca');
    console.log('7 - Remover usuário da biblioteca');
    console.log('8 - Listar livros emprestados');
    console.log('Pressione qualquer outra tecla pra sair da aplicação.');
    var userInput = userPrompt();
    switch (userInput) {
        case '1':
            exibirLivros(biblioteca);
            break;
        case '2':
            adicionarLivro(biblioteca);
            break;
        case '3':
            removerLivro(biblioteca);
            break;
        case '4':
            emprestarLivro(biblioteca);
            break;
        case '5':
            devolverLivro(biblioteca);
            break;
        case '6':
            adicionarUsuario(biblioteca);
            break;
        case '7':
            removerUsuario(biblioteca);
            break;
        case '8':
            listarLivrosEmprestados(biblioteca);
            break;
        default:
            console.log('Saindo do aplicativo.');
    }
}
function exibirLivros(biblioteca) {
    console.log('Lista de Livros Disponíveis na Biblioteca:');
    if (biblioteca.livros.length === 0) {
        console.log('Nenhum livro disponível.');
        main();
    }
    else {
        biblioteca.livros.forEach(function (livro) {
            console.log(colors.cyan('----------------------------------------'));
            console.log(colors.bold("T\u00EDtulo: ".concat(livro.titulo)));
            console.log("Autor: ".concat(livro.autor.nome));
            console.log("Ano de Publica\u00E7\u00E3o: ".concat(livro.anoPublicacao));
            console.log("G\u00EAnero: ".concat(livro.genero));
            console.log(colors.cyan('----------------------------------------'));
        });
        main();
    }
}
function adicionarLivro(biblioteca) {
    console.log('Adicionar Livro à Biblioteca:');
    var titulo = userPrompt('Título do livro: ');
    var autorNome = userPrompt('Nome do autor: ');
    var anoPublicacao = parseInt(userPrompt('Ano de publicação: '));
    var genero = userPrompt('Gênero: ');
    var autor = new Autor(autorNome, '', '');
    var novoLivro = new Livro(titulo, autor, anoPublicacao, genero);
    biblioteca.adicionarLivro(novoLivro);
    main();
}
function removerLivro(biblioteca) {
    console.log('Remover Livro da Biblioteca:');
    var titulo = userPrompt('Título do livro a ser removido: ');
    var livroParaRemover = biblioteca.livros.find(function (livro) { return livro.titulo === titulo; });
    if (livroParaRemover) {
        biblioteca.removerLivro(livroParaRemover);
    }
    else {
        console.log("Livro \"".concat(titulo, "\" n\u00E3o encontrado na biblioteca."));
    }
    main();
}
function emprestarLivro(biblioteca) {
    console.log('Emprestar Livro:');
    var titulo = userPrompt('Título do livro a ser emprestado: ');
    var livroParaEmprestar = biblioteca.livros.find(function (livro) { return livro.titulo === titulo; });
    if (livroParaEmprestar) {
        var usuarioNome_1 = userPrompt('Nome do usuário que está pegando emprestado: ');
        var usuario = biblioteca.usuarios.find(function (user) { return user.nome === usuarioNome_1; });
        if (usuario) {
            usuario.emprestarLivro(livroParaEmprestar);
            console.log("Livro \"".concat(titulo, "\" emprestado para ").concat(usuarioNome_1, "."));
        }
        else {
            console.log("Usu\u00E1rio \"".concat(usuarioNome_1, "\" n\u00E3o encontrado."));
        }
    }
    else {
        console.log("Livro \"".concat(titulo, "\" n\u00E3o encontrado na biblioteca."));
    }
    main();
}
function devolverLivro(biblioteca) {
    console.log('Devolver Livro:');
    var titulo = userPrompt('Título do livro a ser devolvido: ');
    var livroParaDevolver = biblioteca.livros.find(function (livro) { return livro.titulo === titulo; });
    if (livroParaDevolver) {
        var usuarioNome_2 = userPrompt('Nome do usuário que está devolvendo: ');
        var usuario = biblioteca.usuarios.find(function (user) { return user.nome === usuarioNome_2; });
        if (usuario) {
            usuario.devolverLivro(livroParaDevolver);
            console.log("Livro \"".concat(titulo, "\" devolvido por ").concat(usuarioNome_2, "."));
        }
        else {
            console.log("Usu\u00E1rio \"".concat(usuarioNome_2, "\" n\u00E3o encontrado."));
        }
    }
    else {
        console.log("Livro \"".concat(titulo, "\" n\u00E3o encontrado na biblioteca."));
    }
    main();
}
function adicionarUsuario(biblioteca) {
    console.log('Adicionar Usuário à Biblioteca:');
    var nome = userPrompt('Nome do usuário: ');
    var email = userPrompt('Email do usuário: ');
    var novoUsuario = new Usuario(nome, email);
    biblioteca.adicionarUsuario(novoUsuario);
    main();
}
function removerUsuario(biblioteca) {
    console.log('Remover Usuário da Biblioteca:');
    var nome = userPrompt('Nome do usuário a ser removido: ');
    var usuarioParaRemover = biblioteca.usuarios.find(function (user) { return user.nome === nome; });
    if (usuarioParaRemover) {
        biblioteca.removerUsuario(usuarioParaRemover);
    }
    else {
        console.log("Usu\u00E1rio \"".concat(nome, "\" n\u00E3o encontrado na biblioteca."));
    }
    main();
}
function listarLivrosEmprestados(biblioteca) {
    console.log('Livros Emprestados:');
    var livrosEmprestados = biblioteca.listarLivrosEmprestados();
    if (livrosEmprestados.length === 0) {
        console.log('Nenhum livro emprestado no momento.');
    }
    else {
        livrosEmprestados.forEach(function (livro) {
            console.log(colors.cyan('----------------------------------------'));
            console.log(colors.bold("T\u00EDtulo: ".concat(livro.titulo)));
            console.log("Autor: ".concat(livro.autor.nome));
            console.log("Ano de Publica\u00E7\u00E3o: ".concat(livro.anoPublicacao));
            console.log("G\u00EAnero: ".concat(livro.genero));
            console.log(colors.cyan('----------------------------------------'));
        });
    }
    main();
}
main();
