<h3>Preparação:</h3>

<p>Estou utilizando o script "dev": "tsc && node server.js" no package.json para compilar o arquivo TS 
e executar automaticamente em seguida o arquivo JS.</p>

<p>Alternativa: instalar o pacote tsx(link abaixo). Lá tem várias opções explicadas, como dar watch
no arquivo da seguinte forma: "dev": "tsx watch src/server.ts"</p>

<a href="https://www.npmjs.com/package/tsx">TSX package</a>

<hr/>

<p>Criação de Classe e Instância:</p>
<ul>
  <li>Crie uma classe Carro com propriedades como modelo, ano e cor.<span>&#10003;</span></li>
  <li>Instancie dois objetos dessa classe com diferentes valores.<span>&#10003;</span></li>
  <li>Imprima no console os detalhes de cada carro.<span>&#10003;</span></li>
</ul>

<p>Herança e Polimorfismo:</p>
<ul>
  <li>Crie uma classe base chamada Animal com métodos como emitirSom e mover.<span>&#10003;</span></li>
  <li>Derive duas classes, Cachorro e Pássaro, que herdam da classe Animal.<span>&#10003;</span></li>
  <li>Sobrescreva o método emitirSom em ambas as classes derivadas.<span>&#10003;</span></li>
  <li>Crie instâncias de Cachorro e Pássaro e chame seus métodos.<span>&#10003;</span></li>
</ul>

<p>Encapsulamento e Métodos Estáticos:</p>
<ul>
  <li>Crie uma classe Calculadora com métodos de operações matemáticas (soma, subtração, multiplicação, divisão).<span>&#10003;</span></li>
  <li>Encapsule as operações matemáticas, permitindo apenas o acesso através dos métodos da classe.<span>&#10003;</span></li>
  <li>Adicione um método estático que retorna o valor absoluto de um número.<span>&#10003;</span></li>
</ul>

<p>Interfaces e Implementação:</p>
<ul>
  <li>Crie uma interface FormaGeometrica com métodos como calcularArea e calcularPerimetro.<span>&#10003;</span></li>
  <li>Implemente a interface em classes como Quadrado e Círculo.<span>&#10003;</span></li>
  <li>Instancie objetos dessas classes e chame seus métodos.<span>&#10003;</span></li>
</ul>

<p>Composição de Objetos:</p>
<ul>
  <li>Crie uma classe Motor com métodos como ligar e desligar.<span>&#10003;</span></li>
  <li>Em seguida, crie uma classe Carro que possui uma instância de Motor.<span>&#10003;</span></li>
  <li>Implemente métodos em Carro que delegam chamadas aos métodos correspondentes em Motor.<span>&#10003;</span></li>
  <li>Teste a funcionalidade ligando e desligando o carro.<span>&#10003;</span></li>
</ul>

<p>Tratamento de Exceções:</p>
<ul>
  <li>Crie uma classe ContaBancaria com propriedades como saldo e métodos como sacar e depositar.<span>&#10003;</span></li>
  <li>Implemente uma verificação para garantir que o saldo não fique negativo após um saque.<span>&#10003;</span></li>
  <li>Utilize exceções para lidar com situações em que o saque não pode ser realizado devido a saldo insuficiente.<span>&#10003;</span></li>
  <li>Teste a classe com casos que resultem em exceções.<span>&#10003;</span></li>
</ul>

<p>Padrões de Projeto: Singleton:</p>
<ul>
  <li>Implemente uma classe ConfiguracaoApp usando o padrão Singleton, garantindo que exista apenas uma instância dessa classe.<span>&#10003;</span></li>
  <li>Adicione propriedades de configuração à classe e métodos para acessá-las.<span>&#10003;</span></li>
  <li>Tente criar várias instâncias da classe e verifique se todas se referem à mesma instância.<span>&#10003;</span></li>
</ul>

<hr/>

<h3>PROJETO INDIVIDUAL</h3>
<p>Sistema de Gerenciamento de Biblioteca</p>
<p>Considere o desenvolvimento de um sistema de gerenciamento de biblioteca em TypeScript. Este
sistema deve permitir a gestão de livros, autores e usuários. Os requisitos básicos são:</p>

<p>Livro:<span>&#10003;</span></p>
<ul>
  <li>Um livro possui atributos como título, autor, anoPublicacao, e genero.</li>
  <li>Implemente métodos para emprestar e devolver livros.</li>
</ul>

<p>Autor:<span>&#10003;</span></p>
<ul>
  <li>Um autor possui atributos como nome, dataNascimento e nacionalidade.</li>
  <li>Implemente métodos para adicionar e remover livros associados ao autor.</li>
</ul>

<p>Usuário:<span>&#10003;</span></p>
<ul>
  <li>Um usuário possui atributos como nome, email e livrosEmprestados.</li>
  <li>Implemente métodos para emprestar e devolver livros.</li>
</ul>

<p>Biblioteca:<span>&#10003;</span></p>
<ul>
  <li>A biblioteca é responsável por manter registros de livros, autores e usuários.</li>
  <li>Implemente métodos para adicionar e remover livros, autores e usuários.</li>
  <li>Forneça métodos para buscar livros por autor, listar livros emprestados, etc.</li>
</ul>

<p>Relatórios:<span>&#10003;</span></p>
<ul>
  <li>Crie um mecanismo para gerar relatórios, como listar todos os livros emprestados, livros
  disponíveis, etc.</li>
</ul>

<p>Testes:</p>
<ul>
  <li>Desenvolva testes unitários para garantir a integridade do sistema.</li>
  <li>Considere cenários como tentativa de empréstimo de livro indisponível, adição de autor sem
  livros associados, etc.</li>
</ul>

<p>Requisitos Técnicos:<span>&#10003;</span></p>
<ul>
  <li>Utilize classes e interfaces para modelar livros, autores e usuários.</li>
  <li>Implemente métodos construtores, getters, setters e métodos específicos para cada classe.</li>
  <li>Utilize herança e composição conforme apropriado.</li>
  <li>Considere a utilização de decorators para adicionar funcionalidades específicas, como logging de
  operações.</li>
</ul>

<p>Observações:</p>
<p>Não existe código “mais correto”, existe abstração! Crie utilizando as melhores práticas de
Orientações a Objetos.</p>

<p>Não se preocupe caso falte implementação de alguma funcionalidade, faça o melhor possível, o
importante é aprender e demonstrar o que entendeu!</p>