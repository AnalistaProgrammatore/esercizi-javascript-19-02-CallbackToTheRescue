/**
* Scrivere qui il codice dell'esercizio 2 del capitolo 4 di eloquentJS
* Vi ricordo che le funzioni DEVONO ESSERE PURE e implementate una in modo IMPERATIVO e una in modo DICHIARATIVO
**/
function reverseImperative(arr) {
  let arrCopied = []
  for (let i = arr.length; i > 0; i--) {
    arrCopied.push(arr[i-1])
  }
 return arrCopied
}


const reverseDeclarative = arr => arr.reduce((a, b) => [b, ...a], [])
