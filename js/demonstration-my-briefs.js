'use strict'

//----------------------------------- Isotop -----------------------------------

jQuery(function ($) {

    $(document).ready(function () {
        let $grid = $('.creators-list').isotope({
            itemSelector: '.creator-card-item',
            layoutMode: 'fitRows',
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
//----------------------------------- Filter dropdown -----------------------------------
jQuery(function ($) {
    if (parseInt($(window).width()) < 992) {
        $('.dropdown-toggle').click(function(){
            $(this).next('.filters-button-group').toggle();
            $('.btn-filter').click(function() {
                let filterValue = $(this).text();
                $('.dropdown-toggle').text(filterValue);
            });
        });

        $(document).click(function(e) {
            let target = e.target;
            if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
                $('.filters-button-group').hide();
            }
        });
    }
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

let support = document.querySelector('.support'),
    contactUs = document.querySelector('.contact-us'),
    gotIt = document.querySelectorAll('.got-it'),
    closeX = document.querySelectorAll('.close-x'),
    supportSubmit = document.querySelector('.support-submit'),
    messagePopUp = document.querySelectorAll('.message-pop-up'),
    supportPopUp = document.querySelectorAll('.support-pop-up'),
    subMenuLinks = [support, contactUs];


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
