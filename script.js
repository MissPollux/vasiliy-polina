function changeTimezone(date, ianatz) {
    var invdate = new Date(date.toLocaleString('en-US', {
        timeZone: ianatz
    }));

    var diff = invdate.getTime() - date.getTime();

    return new Date(date.getTime() - diff);
};

document.addEventListener('DOMContentLoaded', function() {
    // конечная дата
    const x = new Date("2025-07-08T14:30:00");
    // часовой пояс
    // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    var deadline = changeTimezone(x, "Europe/Ulyanovsk");
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
});


document.getElementById('choose-pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({behavior: 'smooth'});
}

let productInput = document.getElementById('product-input');
let addToCartButtons = document.getElementsByClassName('btn-add-to-cart');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function (e) {
        productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        document.getElementsByClassName('order')[0].scrollIntoView({behavior: 'smooth'});
    }
}

document.getElementById('creat-order').onclick = function () {
    let addressInput = document.getElementById('address-input');
    let phoneInput = document.getElementById('phone-input');
    if (!productInput.value) {
        alert('Заполните пиццу');
        return;
    }
    if (!addressInput.value) {
        alert('Заполните адрес');
        return;
    }
    if (!phoneInput.value) {
        alert('Заполните телефон');
        return;
    }
    alert('Спасибо за заказ!')
}

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})

// document.getElementsByTagName('h1')[0].innerHTML = 'Самая крутая пицца ждёт <span>только в нашем ресторане</span>';
//
// document.getElementById('products-title').style.color = 'black';
//
// let buttonElements = document.querySelectorAll('.btn');
// buttonElements.forEach((item) => {
//     if (item.id === 'no-touch') {
//         return;
//     }
//     item.style.backgroundColor = 'transparent';
//     item.style.border = '1px solid rgb(255, 175, 24)';
//     item.style.color = 'rgb(255, 175, 24)';
// })
//
//
//
//
// // for (let i = 0; i < buttonElements.length; i++) {
// //     if (buttonElements[i].id === 'no-touch') {
// //         continue;
// //     }
// //     buttonElements[i].style.backgroundColor = 'transparent';
// //     buttonElements[i].style.border = '1px solid rgb(255, 175, 24)';
// //     buttonElements[i].style.color = 'rgb(255, 175, 24)';
// // }
//
// document.getElementById('name-input').placeholder = "Имя";
//
// document.querySelector('.rights span').innerText = (new Date()).getFullYear();
//
// let products = document.getElementsByClassName('product');
// for (let i = 0; i < products.length; i++) {
//     if (i % 2 === 1) {
//         products[i].children[1].innerText += '*';
//     }
// }
