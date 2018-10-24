'use strict';

let car = document.getElementById('car'),
    start = document.getElementById('start');

let stepLeft = 0;

function step() {
    stepLeft += 5;
    car.style.left = stepLeft + 'px';
    console.log(car.style.left);
    if (stepLeft < 500) {
        requestAnimationFrame(step)


    } else {
        alert('Приехали');
        stepLeft = 0;
    }
}
start.addEventListener('click',function () {
    requestAnimationFrame(step)
});