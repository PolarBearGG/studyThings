window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }

    hideTabContent(1);

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

    let deadline = '2020-01-26';

    function getTimeRemaining(endtime) {
        let t = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));
        // hours = ((t / 1000 / 60 / 60) % 24);
        if (t < 0) {
            return {
                'total': '00',
                'hourse': '00',
                'minutes': '00',
                'seconds': '00'
            };
        } else {
            return {
                'total': t,
                'hourse': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.seconds.toString().length == 1) {
                hours.textContent = t.hourse;
                minutes.textContent = t.minutes;
                seconds.textContent = "0" + t.seconds;
            } else if (t.minutes.toString().length == 1) {
                hours.textContent = t.hourse;
                minutes.textContent = "0" + t.minutes;
                seconds.textContent = t.seconds;
            } else if (t.hourse.toString().length == 1) {
                hours.textContent = "0" + t.hourse;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            } else {
                hours.textContent = t.hourse;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }


    }
    setClock('timer', deadline);

});