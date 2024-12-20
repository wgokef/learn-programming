let x = +prompt("Введите x=");
let a = +prompt("Введите a=");
let b = +prompt("Введите b=");
let f;
if (0 < x && x <= 1) {
    f = Math.min((x - a)/x , Math.sqrt(a) + x , Math.sin(x));
} 
if (x > 1) {
    f = Math.max(Math.sqrt(x) , a * x);
}
if (x <= 0) {
    f = (a * x) + b;
}
console.log (f);