// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

const mySlice = (array, min, max = array.length - 1) => {
    let slicedArray = [];
    for (let i = min; i <= max; i++) {
        slicedArray.push(array[i]);
    }
    return slicedArray;
}

let exampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`example 1: min=0, max=9`);
console.log(mySlice(exampleArray, 0, 9));

console.log(`example 1: min=2, max=10`);
console.log(mySlice(exampleArray, 2));

console.log(`example 1: min=4, max=8`);
console.log(mySlice(exampleArray, 4, 8));