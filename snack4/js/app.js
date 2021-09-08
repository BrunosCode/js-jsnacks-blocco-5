let array1 = ["a", "b", "c", "d", "e"];
let array2 = [1,2,3,4,5];

let mergedArray = [];
for(let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
    mergedArray.push(array2[i]);
}
console.log(mergedArray);