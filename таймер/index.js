document.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date('2025-03-27T11:40:00');

    const elDays = document.querySelector('.timer__days');
    const elHours = document.querySelector('.timer__hours');
    const elMinutes = document.querySelector('.timer__minutes');
    const elSeconds = document.querySelector('.timer__seconds');


    const declensionNum = (num, words) => {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    };

    const updateTimer = () => {
        const now = new Date();
        const diff = Math.max(0, deadline - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        elDays.textContent = String(days).padStart(2, '0');
        elHours.textContent = String(hours).padStart(2, '0');
        elMinutes.textContent = String(minutes).padStart(2, '0');
        elSeconds.textContent = String(seconds).padStart(2, '0');

        elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

        if (diff === 0) {
            clearInterval(timerId);
        }
    };


    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
});