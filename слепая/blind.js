
const btn = document.querySelector('#btn');

let str1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

let str2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "l"];

let str3 = ["z", "x", "c", "v", "b", "n", "m",];

let randEl;
let resultStr = "";
let letter;


btn.addEventListener("click", Name);


function getRandomint(max) {
    return Math.floor(Math.random() * max);
}
function randText(arrayStr) {
    for (let i = 0; i < letter; i++) {
        randEl = getRandomint(arrayStr.length - 1);
        resultStr += arrayStr[randEl];
    }
}


function Name() {
    let startTime = new Date();
    console.log(startTime);

    let line = prompt('Какая строка? (1 - str1, 2 - str2, 3 - str3, 4 - все)');


    letter = prompt('Сколько символов?');
    while (true) {
        
        if (line == 1) {
            randText(str1);
        } else if (line == 2) {
            randText(str2);
        } else if (line == 3) {
            randText(str3);
        } else if (line == 4) {
            randText(str1.concat(str2, str3));
            //randText(str1.concat(str2, str3));
        }
        

        let str = prompt(`Введите ${resultStr}`);




        if (str == resultStr) {

            let endTime = new Date();
            let resultTime = (endTime - startTime) / 1000;
            console.log(resultTime);

            alert("Правильно " + resultTime);
            alert(`${resultStr} `) // если там строка большая 
        } else if (str == 0) {
            break;
        } else {
            alert("Неправильно");
        }
        resultStr = "";
    }

}
