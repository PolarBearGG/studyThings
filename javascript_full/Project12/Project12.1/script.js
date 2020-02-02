window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a = 1) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }

    hideTabContent();

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');

        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });



    //TIMER

    let deadline = '2020-01-28';

    function getTimeRemaining(endtime) {
        let t = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));
        // hours = ((t / 1000 / 60 / 60) % 24);
        return {
            'total': t,
            'hourse': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hourse);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }


    }
    setClock('timer', deadline);

    //Modal window
    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btn = {
            description1: document.querySelectorAll('.description-btn')[0],
            description2: document.querySelectorAll('.description-btn')[1],
            description3: document.querySelectorAll('.description-btn')[2],
            description4: document.querySelectorAll('.description-btn')[3],
            more: document.querySelector('.more')
        };

    function all(test) {
        test.addEventListener('click', () => {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            test.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    for (let prop in btn) {
        all(btn[prop]);
    }

    // Form 1

    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('statuss');


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener("readystatechange", function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }


        });


        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }
    });



    // Form 2
    let ping = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let contactForm = document.getElementById('form'),
        insert = contactForm.getElementsByTagName('input'),
        statusInfo = document.createElement('div2');
    insert[0].name = "Email";
    insert[1].name = "Phone";
    console.log(insert);
    statusInfo.classList.add('status');


    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        contactForm.appendChild(statusInfo);

        let request1 = new XMLHttpRequest();
        request1.open('POST', 'server.php');
        request1.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData1 = new FormData(contactForm);

        let obj = {};
        formData1.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request1.send(json);

        request1.addEventListener("readystatechange", function () {
            if (request1.readyState < 4) {
                statusInfo.innerHTML = ping.loading;
            } else if (request1.readyState === 4 && request1.status === 200) {
                statusInfo.innerHTML = ping.success;
            } else {
                statusInfo.innerHTML = ping.failure;
            }


        });


        for (let i = 0; i < insert.length; i++) {
            insert[i].value = "";
        }

    });



});