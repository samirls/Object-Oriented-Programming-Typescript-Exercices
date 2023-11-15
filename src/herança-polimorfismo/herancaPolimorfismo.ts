class Animal {
  emitirSom(): void {
    console.log('AHHHHHHHHHHHH');
  }

  mover(): void {
    console.log('Tum Tum Tum Tum');
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log('Au au!');
  }
}

class Passaro extends Animal {
  emitirSom(): void {
    console.log('Piu piu!');
  }
}

const Rex = new Cachorro();
Rex.emitirSom();
Rex.mover();

const loro = new Passaro();
loro.emitirSom(); 
loro.mover();
