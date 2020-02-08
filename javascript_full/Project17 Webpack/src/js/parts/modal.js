function modal() {
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

}
module.exports = modal;