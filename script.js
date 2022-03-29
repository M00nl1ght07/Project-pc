const modalWindow = document.querySelector('.modal');
const buttonModalheader = document.querySelector('.header__button');
const buttonModalhead = document.querySelector('.main-page__button');
const buttonModal = document.querySelector('.footer__button');
const modalCross = document.querySelector('.modal__cross');
const body = document.querySelector('body');


buttonModalheader.addEventListener('click', () =>{
    modalWindow.style.display = 'block';
    body.classList.add('noscroll');
})
buttonModalhead.addEventListener('click', () =>{
    modalWindow.style.display = 'block';
    body.classList.add('noscroll');
})
buttonModal.addEventListener('click', () =>{
    modalWindow.style.display = 'block';
    body.classList.add('noscroll');
})


modalWindow.addEventListener('click',function (e) {
        const isModal = e.target.closest('.modal__wrapper');

        if (!isModal) {
            modalWindow.style.display = 'none';
            body.classList.remove('noscroll');
        }
    })


modalCross.addEventListener('click',() =>{
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
})