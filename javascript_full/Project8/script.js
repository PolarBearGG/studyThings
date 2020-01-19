// let timeId = setTimeout(sayHello, 3000);
// clearTimeout(timeId);

// let timeId = setInterval(sayHello, 3000);
// clearTimeout(timeId);

// function sayHello() {
//     console.log('Hello World!');
// }

// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log,2000);
// })

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

    function myAnimation() {
        let pos = 0;

        let id = setInterval(frame, 10);
        function frame() {
            if(pos == 300) {
                clearInterval();
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }
btn.addEventListener('click',myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

    btnBlock.addEventListener('click', function(event) {
        if(event.target && event.target.matches('button.first')) {
            console.log('helo');
        }
    });