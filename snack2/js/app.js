// Make array of object courgettes
let courgettes = [];

class Courgette {
    constructor(variety, weight, length1) {
        this.variety = variety;
        this.weight = weight;
        this.length1 = length1
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
console.log(courgettes);
let smallCourgettes = [];
let longCourgettes = [];

// print all the courgette
for(let i = 0; i < courgettes.length; i++){
    // console.log(`${i+1}. ${courgettes[i].presentation()}`);
    if ( courgettes[i].length1 > 15 ) {
        longCourgettes.push(courgettes[i]);
    } else {
        smallCourgettes.push(courgettes[i]);
    }
}

console.log("small", smallCourgettes);
console.log("long", longCourgettes);

