'use strict'

//--------------------------- Sub menu on click "My account" -----------------

let subMenuBlock = document.querySelector('.sub-menu-block'),
    myAccountLink = document.querySelector('.account-link');

myAccountLink.addEventListener('click', openSubMenu);

function openSubMenu() {
    subMenuBlock.classList.toggle('active-sub-menu');
}

//--------------------------- Pop-up on click sub menu links -----------------

let faq = document.querySelector('.faq'),
    terms = document.querySelector('.terms'),
    privacy = document.querySelector('.privacy'),
    support = document.querySelector('.support'),
    contactUs = document.querySelector('.contact-us'),
    gotIt = document.querySelectorAll('.got-it'),
    closeX = document.querySelectorAll('.close-x'),
    supportSubmit = document.querySelector('.support-submit'),
    messagePopUp = document.querySelectorAll('.message-pop-up'),
    supportPopUp = document.querySelectorAll('.support-pop-up'),
    subMenuLinks = [faq, terms, privacy, support, contactUs];


subMenuLinks.forEach(i => i.addEventListener('click', () => {
    let linkName =  i.className.split(' ')[1],
        pop = document.querySelector('.'+ linkName + '-pop-up');
    pop.style.display = 'block'
    xClick(pop);
    gotItClick(pop);
}));

function xClick(pop) {
    closeX.forEach(i => i.addEventListener('click', () => {
        pop.style.display = "none";
    }));
}

function gotItClick(pop) {
    gotIt.forEach(i => i.addEventListener('click', () => {
        pop.style.display = "none";
    }));
}

supportSubmit.addEventListener('click', ()=> {
    supportPopUp.style.display = 'none'
    messagePopUp.style.display = 'block'
})

//----------------------------------- Selectors -----------------------------------

let dropholder = document.querySelector('.dropholder-roles'),
    dropdownRoles = document.querySelector('.dropdown-roles');

dropdownRoles.addEventListener('click', ()=> {
    dropholder.classList.toggle('active')
});