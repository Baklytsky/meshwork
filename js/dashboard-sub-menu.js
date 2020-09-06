'use strict';

//--------------------- Sub menu on click "My account" -------------------------
jQuery(function ($) {
    let subMenuHeight = jQuery(".sub-menu-block").height();
    $('.account-link').on('click', function (e) {
        $(".sub-menu-block").css('top', -subMenuHeight - 30)
        $(".sub-menu-block").slideToggle("fast");
    });
    $(document).on("click", function (event) {
        let $trigger = $(".account-block");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".sub-menu-block").slideUp("fast");
        }
    });
});

//--------------------------- Pop-up on click sub menu links -----------------

let support = document.querySelector('.support'),
    contactUs = document.querySelector('.contact-us'),
    gotIt = document.querySelectorAll('.got-it'),
    closeX = document.querySelectorAll('.close-x'),
    supportSubmit = document.querySelector('.support-submit'),
    messagePopUp = document.querySelectorAll('.message-pop-up'),
    supportPopUp = document.querySelectorAll('.support-pop-up'),
    subMenuLinks = [ support, contactUs];


subMenuLinks.forEach(i => i.addEventListener('click', () => {
    let linkName = i.className.split(' ')[1],
        pop = document.querySelector('.' + linkName + '-pop-up');
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

supportSubmit.addEventListener('click', () => {
    supportPopUp.style.display = 'none'
    messagePopUp.style.display = 'block'
})