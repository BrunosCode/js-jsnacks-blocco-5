// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

// ask a string
let string = prompt("give me a string");
// reverse it
let reversedString = "";
for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
}
console.log(reversedString);