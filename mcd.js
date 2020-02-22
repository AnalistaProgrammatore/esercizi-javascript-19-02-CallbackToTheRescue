/**
* Scrivere qui il codice delle funzioni mcd(x, y) e mcdRecursive(x, y)
**/
const x = 1256
const y = 336
function mcdRecursive(a, b) {
  let r = a % b
  if ( r === 0) {
    return b
  } else{
    a = b
    b = r
  }
  return mcdRecursive(a,b)
}
const exe = mcdRecursive(x,y)




function mcdIterative(a, b) {
  while (b !== 0) {
     let r = a % b
     a = b
     b = r
  }
  return a;
}
