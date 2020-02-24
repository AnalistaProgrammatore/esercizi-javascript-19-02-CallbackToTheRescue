/**
* Scrivere qui il codice dell'esercizio 3 del capitolo 4 di eloquentJS
**/
function arrayToList(arr) {
    let nested = null
    for (let i = 0; i < arr.length; i++) {
        nested = { value: arr[i], rest: nested }
    }
    return nested
}

