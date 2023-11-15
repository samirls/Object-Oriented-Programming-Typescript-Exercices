class Animal {
    emitirSom() {
        console.log('AHHHHHHHHHHHH');
    }
    mover() {
        console.log('Tum Tum Tum Tum');
    }
}
class Cachorro extends Animal {
    emitirSom() {
        console.log('Au au!');
    }
}
class Passaro extends Animal {
    emitirSom() {
        console.log('Piu piu!');
    }
}
const Rex = new Cachorro();
Rex.emitirSom();
Rex.mover();
const loro = new Passaro();
loro.emitirSom();
loro.mover();
