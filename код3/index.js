let a = +prompt("Введите a");
let b = +prompt("Введите b");
let c = +prompt("Введите c");
function mediana (A, B, C) {
   return 0.5 * Math.sqrt(2 * Math.pow(B, 2) + 2 * Math.pow(C, 2) +  Math.pow(A, 2));
}
let m_a = mediana(b, b, c); 
console.log(`m_a: ${m_a}`);
