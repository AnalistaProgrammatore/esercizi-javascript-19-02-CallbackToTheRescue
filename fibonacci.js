/**
* Scrivere qui il codice della funzione fibonacci(n)
**/

const number = 30
const fibonacciRecursive = function(num) {
    if(num < 2){
      return num
 }else{
      return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
  }
}
const exe = fibonacciRecursive(number)
