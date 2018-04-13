// Responsive Menu - Dropdown
//const body = document.body;
//const hamburger = document.getElementById('hamburger');

//hamburger.addEventListener('click', openMenu);

//console.log(hamburger);

const $body = $('body');
const $header = $('header');

$header.on('click', '#hamburger', openMenu);

function openMenu(){
    $body.toggleClass('show');
}