/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/

//al momento non sono riuscito a trovare un modo di farla funzionare senza dichiarare anche la variabile x
function range(a, b, x) {
  let arr = []
  if (x < 0) {
    for (let i = a; i >= b; i += x){
      arr.push(i)
    }
  } else {
    for (let i = a; i <= b; i += x){
      arr.push(i)
    }
  }
  return arr
}

function sum(arr){
  let acc= 0
  for(let i=0; i< arr.length; i++){
    acc += arr[i]
  }
  return acc
}
