// Scrivi una funzione che fonda due array (aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const array1 = ["a", "b", "c", "d", "e"];
const array2 = [1,2,3,4,5];

const mergeArrays = (array1, array2) => {
    let mergedArray = [];
    for(let i = 0; i < array1.length; i++) {
        mergedArray.push(array1[i]);
        mergedArray.push(array2[i]);
    }
    return mergedArray;
}
console.log(mergeArrays(array1, array2));