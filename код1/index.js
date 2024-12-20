function f(x) {
    if (x > 2) {
        return Math.exp(x);
    }
    if (-2 <= x && x <= 2) {
        return x + 4;
    }
    if (x < -2) {
        return 0
    }

}


let start = -3;
let end = 3;
let step = 0.25;

for (let x = start; x <= end; x += step) {
    console.log(`f(${x}) = ${f(x)}`);
}