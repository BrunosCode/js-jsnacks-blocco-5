// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// Make array of object courgettes
let courgettes = [];

class Courgette {
    constructor(variety, weight, mineLength) {
        this.variety = variety;
        this.weight = weight;
        this.mineLength = mineLength
    }
    presentation() {
        return `This courgette is a ${this.variety}, it is ${this.weight}g and ${this.length}cm`;
    }
}

const getRndNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// add random courgette
for( let i = 0; i < 10; i++){
    courgettes.push(new Courgette(getRndNumber(1,5), getRndNumber(70,300), getRndNumber(10,80)));
}

// print all the courgette
for(let i = 0; i < courgettes.length; i++){
    console.log(`${i+1}. ${courgettes[i].presentation()}`)
}

// sum of all courgette weights
let weightsSum = 0;
for( let courgette of courgettes){
    weightsSum += courgette.weight;
}
console.log(`the sum of courgette weights is ${weightsSum}g`);