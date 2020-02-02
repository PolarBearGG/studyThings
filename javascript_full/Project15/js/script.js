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
        contactForm = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function getData(data) {
        data.addEventListener('submit', function (event) {
            event.preventDefault();
            data.appendChild(statusMessage);

            let formData = new FormData(data);

            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');



                    let obj = {};
                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);

                    request.send(json);

                    request.addEventListener("readystatechange", function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status === 200) {
                            resolve();
                        } else {
                            reject();
                        }


                    });
                });

            }



            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = "";
                }
            }


            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);




        });
    }
    getData(form);
    getData(contactForm);



    //slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for(let i = 0; i<slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';

        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

dotsWrap.addEventListener('click', function(event) {
    for(let i = 0; i < dots.length + 1; i++) {
        if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
});










//calc

let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    daysSum = 0,
    total = 0,
    personsSum = 0;

    totalValue.innerHTML = 0;

persons.addEventListener('change', function() {
    personsSum = +this.value;
    total = (daysSum + personsSum)*4000;

    if(persons.value == '' || restDays.value == '') {
        totalValue.innerHTML = '0';
    } else {
        totalValue.innerHTML = total;
    }
});



restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (daysSum + personsSum)*4000;

    if(persons.value == '' || restDays.value == '') {
        totalValue.innerHTML = '0';
    } else {
        totalValue.innerHTML = total;
    }
});

place.addEventListener("change",function(){
    if(persons.value == '' || restDays.value == '') {
        totalValue.innerHTML = '0';
    } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
});


});