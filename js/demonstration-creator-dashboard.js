'use strict'

//----------------------------------- Isotop -----------------------------------

jQuery(function ($) {

    $(document).ready(function () {
        let $grid = $('.creators-list').isotope({
            itemSelector: '.creator-card-item',
            layoutMode: 'fitRows'
        });
        $('.filters-button-group').on( 'click', 'button', function() {
            let filterValue = $( this ).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        $('.button-group').each( function( i, buttonGroup ) {
            let $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.active-btn-filter').removeClass('active-btn-filter');
                $( this ).addClass('active-btn-filter');
            });
        });
    });
});

//--------------------------- Sub menu on click "My account" -----------------

let subMenuBlock = document.querySelector('.sub-menu-block'),
    myAccountLink = document.querySelector('.account-link');

myAccountLink.addEventListener('click', openSubMenu);

function openSubMenu() {
    subMenuBlock.classList.toggle('active-sub-menu');
    outBlockClick();
}
//------------- CLOSE Sub menu on click "My account" -----------------------------------

function outBlockClick() {
    if (subMenuBlock.classList.contains('active-sub-menu')) {
        document.body.addEventListener('mousedown', function (e) {
            if (e.target === subMenuBlock && e.target !== myAccountLink) {
                console.log (e.target)
                subMenuBlock.classList.remove('active-sub-menu');
            }
        })
    }
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
    outPopUpClick(pop)
}));

//------------- CLOSE Pop-up`s -----------------------------------

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
function outPopUpClick(pop) {
    if (pop.style.display === "block") {
        document.body.addEventListener('mousedown', function (e) {
            if (e.target === pop) {
                pop.style.display = "none";
            }
        })
    }
}

supportSubmit.addEventListener('click', ()=> {
    supportPopUp.style.display = 'none'
    messagePopUp.style.display = 'block'
})

//----------------------------------- Selectors -------------------------------

let dropholderRoles = document.querySelector('.dropholder-roles'),
    dropdownRoles = document.querySelector('.dropdown-roles'),
    dropdownProjects = document.querySelector('.dropdown-project'),
    dropholderProjects = document.querySelector('.dropholder-project'),
    dropdownRolesOption = document.querySelector('.dropdownOption-roles'),
    dropholderLocation = document.querySelector('.dropholder-location'),
    dropdownLocationOption = document.querySelector('.dropdownOption-location'),
    dropdownLocation = document.querySelector('.dropdown-location');

//----------------------------------- Roles -----------------------------------
if (dropdownRoles) {
    dropdownRoles.addEventListener('click', ()=> {
        dropholderRoles.classList.toggle('active-roles')
        dropholderLocation.classList.remove('active-location')
        dropholderProjects.classList.remove('active-project')
    });
}

//----------------------------------- Location ---------------------------------
if (dropdownLocation) {
    dropdownLocation.addEventListener('click', ()=> {
        dropholderLocation.classList.toggle('active-location')
        dropholderRoles.classList.remove('active-roles')
        dropholderProjects.classList.remove('active-project')
    });
}
//----------------------------------- Location ---------------------------------
if (dropdownProjects) {
    dropdownProjects.addEventListener('click', ()=> {
        dropholderProjects.classList.toggle('active-project')
        dropholderRoles.classList.remove('active-roles')
        dropholderLocation.classList.remove('active-location')
    });
}