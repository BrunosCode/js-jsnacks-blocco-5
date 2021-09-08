// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// Make array of object courgettes
let courgettes = [];

class Courgette {
    constructor(variety, weight, length) {
        this.variety = variety;
        this.weight = weight;
        this.length = length
    }
}

const getRndNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for( let i = 0; i < 10; i++){
    courgettes.push(new Courgette(getRndNumber(1,5), getRndNumber(70,300), getRndNumber(10,80)));
}

console.log(courgettes);

let weightSum = 0;
for( let courgette of courgettes){
    weightSum += courgette.weight;
}

console.log(weightSum);