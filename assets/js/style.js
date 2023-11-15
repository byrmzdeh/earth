const openbtn = document.querySelector('.basket');
const closebtn = document.querySelector('.remove'); 
const showfile = document.querySelector('.js-file');

closebtn.addEventListener('click', function () {
    showfile.style.opacity = '0'; 
});

openbtn.addEventListener('click', function () {
    showfile.style.opacity = '1';
});

