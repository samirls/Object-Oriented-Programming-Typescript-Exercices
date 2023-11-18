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


describe('Biblioteca Class', () => {
  let biblioteca;

  beforeEach(() => {
    biblioteca = new Biblioteca();
  });

  test('Should add and remove a book', () => {
    const livro = new Livro('Test Livro', new Autor('Test Autor', '', ''), 2022, 'Test Genre');
    biblioteca.adicionarLivro(livro);
    expect(biblioteca.livros).toContain(livro);

    biblioteca.removerLivro(livro);
    expect(biblioteca.livros).not.toContain(livro);
  });

  // Add more test cases for other methods in Biblioteca class
});

describe('Usuario Class', () => {
  // Write test cases for Usuario class
});

// Add similar describe blocks for Livro and Autor classes