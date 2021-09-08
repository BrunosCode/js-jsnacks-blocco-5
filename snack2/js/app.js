// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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
    courgettes.push(new Courgette(getRndNumber(1,5), getRndNumber(70,300), getRndNumber(10,50)));
}

// print all the courgette
for(let i = 0; i < courgettes.length; i++){
    console.log(`${i+1}. ${courgettes[i].presentation()}`);
}

// sum of all courgette weights
let weightsSum = 0;
for( let courgette of courgettes){
    weightsSum += courgette.weight;
}
console.log(`the sum of courgette weights is ${weightsSum}g`);

let smallCourgettes = [];
let longCourgettes = [];
for(let i = 0; i < courgettes.length; i++){
    if ( courgettes[i].mineLength > 15 ) {
        longCourgettes.push(courgettes[i]);
    } else {
        smallCourgettes.push(courgettes[i]);
    }
}

console.log("small", smallCourgettes);
console.log("long", longCourgettes);

// sum of small and long courgette weights
let weightsSmallSum = 0;
for( let courgette of smallCourgettes){
    weightsSmallSum += courgette.weight;
}
console.log(`the sum of small courgette weights is ${weightsSmallSum}g`);

let weightsLongSum = 0;
for( let courgette of longCourgettes){
    weightsLongSum += courgette.weight;
}
console.log(`the sum of long courgette weights is ${weightsLongSum}g`);