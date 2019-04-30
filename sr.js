'use strict';

let count = 4;
let logo = document.getElementById('logo');
let timeout = 1000;

function changeLogo() {
    let pic = Math.floor(Math.random() * count);
    logo.src = '/SomethingRandom/' + pic + '.png';
    timeout--;
    if (timeout <= 20) {
        timeout = 20;
    }
    setTimeout(changeLogo, timeout);
}

setTimeout(changeLogo, timeout);
