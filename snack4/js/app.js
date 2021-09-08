// Scrivi una funzione che fonda due array (aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const array1 = ["a", "b", "c", "d", "e", "f"];
const array2 = [1,2,3,4,5];

const mergeArrays = (array1, array2) => {
    let mergedArray = [];
    if (array1.length === array2.length) {
        for (let i = 0, u = 0; i < array1.length; i++, u++) {
            mergedArray.push(array1[i]);
            mergedArray.push(array2[u]);
        }
    } else if (array1.length > array2.length) {
        for (let i = 0, u = 0; i < array1.length; i++, u++) {
            mergedArray.push(array1[i]);
            if ( u < array2.length - 1) {
                mergedArray.push(array2[u]);
            }
        }
    } else if (array1.length < array2.length) {
        for (let i = 0, u = 0; i < array1.length; i++, u++) {

            if ( i < array1.length - 1) {
                mergedArray.push(array1[i]);
            }
            mergedArray.push(array2[u]);
        }
    }
    return mergedArray;
}
console.log(mergeArrays(array1, array2));