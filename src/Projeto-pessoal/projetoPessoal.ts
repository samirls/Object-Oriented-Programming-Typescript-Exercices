const userPrompt = require("prompt-sync")();
var colors = require('colors');

class Livro {
  constructor(
    public titulo: string,
    public autor: Autor,
    public anoPublicacao: number,
    public genero: string
  ) {}

  emprestar(usuario: Usuario): void {
    console.log(`Livro "${this.titulo}" emprestado para ${usuario.nome}.`);
  }

  devolver(usuario: Usuario): void {
    console.log(`Livro "${this.titulo}" devolvido por ${usuario.nome}.`);
  }
}

class Autor {
  livros: Livro[] = [];

  constructor(
    public nome: string,
    public dataNascimento: string,
    public nacionalidade: string
  ) {}

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado ao autor ${this.nome}.`);
  }

  removerLivro(livro: Livro): void {
    const index = this.livros.indexOf(livro);
    if (index !== -1) {
      this.livros.splice(index, 1);
      console.log(`Livro "${livro.titulo}" removido do autor ${this.nome}.`);
    }
  }
}

class Usuario {
  livrosEmprestados: Livro[] = [];

  constructor(
    public nome: string, 
    public email: string
  ) {}

  emprestarLivro(livro: Livro): void {
    this.livrosEmprestados.push(livro);
    livro.emprestar(this);
  }

  devolverLivro(livro: Livro): void {
    const index = this.livrosEmprestados.indexOf(livro);
    if (index !== -1) {
      this.livrosEmprestados.splice(index, 1);
      livro.devolver(this);
    }
  }
}

class Biblioteca {
  livros: Livro[] = [];
  autores: Autor[] = [];
  usuarios: Usuario[] = [];

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
  }

  removerLivro(livro: Livro): void {
    const index = this.livros.indexOf(livro);
    if (index !== -1) {
      this.livros.splice(index, 1);
      console.log(`Livro "${livro.titulo}" removido da biblioteca.`);
    }
  }

  adicionarAutor(autor: Autor): void {
    this.autores.push(autor);
    console.log(`Autor "${autor.nome}" adicionado à biblioteca.`);
  }

  removerAutor(autor: Autor): void {
    const index = this.autores.indexOf(autor);
    if (index !== -1) {
      this.autores.splice(index, 1);
      console.log(`Autor "${autor.nome}" removido da biblioteca.`);
    }
  }

  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
    console.log(`Usuário "${usuario.nome}" adicionado à biblioteca.`);
  }

  removerUsuario(usuario: Usuario): void {
    const index = this.usuarios.indexOf(usuario);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      console.log(`Usuário "${usuario.nome}" removido da biblioteca.`);
    }
  }

  buscarLivrosPorAutor(autor: Autor): Livro[] {
    return this.livros.filter((livro) => livro.autor === autor);
  }

  listarLivrosEmprestados(): Livro[] {
    return this.usuarios.reduce((livrosEmprestados: Livro[], usuario) => {
      return livrosEmprestados.concat(usuario.livrosEmprestados);
    }, []);
  }
}

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

const biblioteca = new Biblioteca();

function main(): void {
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

  let userInput = userPrompt();

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

function exibirLivros(biblioteca: Biblioteca): void {
  console.log('Lista de Livros Disponíveis na Biblioteca:');
  if (biblioteca.livros.length === 0) {
    console.log('Nenhum livro disponível.');
    main();
  } else {
    biblioteca.livros.forEach((livro) => {
      console.log(colors.cyan('----------------------------------------'));
      console.log(colors.bold(`Título: ${livro.titulo}`));
      console.log(`Autor: ${livro.autor.nome}`);
      console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
      console.log(`Gênero: ${livro.genero}`);
      console.log(colors.cyan('----------------------------------------'));
    });
    main();
  }
}

function adicionarLivro(biblioteca: Biblioteca): void {
  console.log('Adicionar Livro à Biblioteca:');
  const titulo = userPrompt('Título do livro: ');
  const autorNome = userPrompt('Nome do autor: ');
  const anoPublicacao = parseInt(userPrompt('Ano de publicação: '));
  const genero = userPrompt('Gênero: ');
  const autor = new Autor(autorNome, '', '');
  const novoLivro = new Livro(titulo, autor, anoPublicacao, genero);

  biblioteca.adicionarLivro(novoLivro);

  main();
}

function removerLivro(biblioteca: Biblioteca): void {
  console.log('Remover Livro da Biblioteca:');
  const titulo = userPrompt('Título do livro a ser removido: ');
  const livroParaRemover = biblioteca.livros.find((livro) => livro.titulo === titulo);

  if (livroParaRemover) {
    biblioteca.removerLivro(livroParaRemover);
  } else {
    console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
  }

  main();
}

function emprestarLivro(biblioteca: Biblioteca): void {
  console.log('Emprestar Livro:');
  const titulo = userPrompt('Título do livro a ser emprestado: ');
  const livroParaEmprestar = biblioteca.livros.find((livro) => livro.titulo === titulo);

  if (livroParaEmprestar) {
    const usuarioNome = userPrompt('Nome do usuário que está pegando emprestado: ');
    const usuario = biblioteca.usuarios.find((user) => user.nome === usuarioNome);

    if (usuario) {
      usuario.emprestarLivro(livroParaEmprestar);
      console.log(`Livro "${titulo}" emprestado para ${usuarioNome}.`);
    } else {
      console.log(`Usuário "${usuarioNome}" não encontrado.`);
    }
  } else {
    console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
  }

  main();
}

function devolverLivro(biblioteca: Biblioteca): void {
  console.log('Devolver Livro:');
  const titulo = userPrompt('Título do livro a ser devolvido: ');
  const livroParaDevolver = biblioteca.livros.find((livro) => livro.titulo === titulo);

  if (livroParaDevolver) {
    const usuarioNome = userPrompt('Nome do usuário que está devolvendo: ');
    const usuario = biblioteca.usuarios.find((user) => user.nome === usuarioNome);

    if (usuario) {
      usuario.devolverLivro(livroParaDevolver);
      console.log(`Livro "${titulo}" devolvido por ${usuarioNome}.`);
    } else {
      console.log(`Usuário "${usuarioNome}" não encontrado.`);
    }
  } else {
    console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
  }

  main();
}

function adicionarUsuario(biblioteca: Biblioteca): void {
  console.log('Adicionar Usuário à Biblioteca:');
  const nome = userPrompt('Nome do usuário: ');
  const email = userPrompt('Email do usuário: ');
  const novoUsuario = new Usuario(nome, email);

  biblioteca.adicionarUsuario(novoUsuario);

  main();
}

function removerUsuario(biblioteca: Biblioteca): void {
  console.log('Remover Usuário da Biblioteca:');
  const nome = userPrompt('Nome do usuário a ser removido: ');
  const usuarioParaRemover = biblioteca.usuarios.find((user) => user.nome === nome);

  if (usuarioParaRemover) {
    biblioteca.removerUsuario(usuarioParaRemover);
  } else {
    console.log(`Usuário "${nome}" não encontrado na biblioteca.`);
  }

  main();
}

function listarLivrosEmprestados(biblioteca: Biblioteca): void {
  console.log('Livros Emprestados:');
  const livrosEmprestados = biblioteca.listarLivrosEmprestados();

  if (livrosEmprestados.length === 0) {
    console.log('Nenhum livro emprestado no momento.');
  } else {
    livrosEmprestados.forEach((livro) => {
      const usuario = biblioteca.usuarios.find((user) =>
        user.livrosEmprestados.includes(livro)
      );
      if (usuario) {
        console.log(colors.cyan('----------------------------------------'));
        console.log(colors.bold(`Título: ${livro.titulo}`));
        console.log(`Autor: ${livro.autor.nome}`);
        console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
        console.log(`Gênero: ${livro.genero}`);
        console.log(`Usuário que pegou emprestado: ${usuario.nome}`);
        console.log(colors.cyan('----------------------------------------'));
      }
    });
  }

  main();
}


main();

export {Biblioteca, Livro, Autor, Usuario}