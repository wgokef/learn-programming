let a = '4 12';
let b = '5 10 15 20 3 6 9 25 30 12 21 24';
let array = [];
let resultSasha = 0;
let resultLena = 0;

const str = a.split(" ");
const str2 = b.split(" ");

console.log(str);
console.log(str2);

for (let i = 0; i < str2.length; i++) {
    array.push(Number(str2[i]));
}

console.log(array);
console.log(Number(str[0]));
console.log(Number(str[1]));

const k = Number(str[0]);
const n = Number(str[1]);

for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
        continue;
    }
    else if (array[i] % 3 == 0) {
        resultSasha++;
    }
    else if (array[i] % 5 == 0) {
        resultLena++;
    }

    if (resultSasha == Number(str[0]) || resultLena == Number(str [0])) {
        break;
    }

}

if (resultSasha > resultLena) {
    console.log ('Sasha');
} else if (resultSasha < resultLena) {
    console.log ('Lena');
} else {
    console.log ('draw');
}


