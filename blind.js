
const btn = document.querySelector('#btn');
let str1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let randEl;
let resultStr = "";
let startTime;

function getRandomint(max) {
    return Math.floor(Math.random() * max);
}
function randText() {
    for (let i = 0; i < 5; i++); {
        randEl = getRandomint(str1.length - 1);
        console.log(randEl)
    }
}

function Name() {

    while (true) {
        randText();
        let str = prompt(`Введитк ${resultStr}`);


        if (str === resultStr) {
            alert("Вы выиграли");
        } else if (str == 0) {
            break;
        } else {
            alert("Вы ошиблись");
        }
    }

}
btn.addEventListener("click", Name);