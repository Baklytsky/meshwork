'use strict';

//-------------------------- burger btn action --------------------------------------

let header = document.querySelector('header'),
    burgerToggle = document.querySelector('.burger-icon'),
    mobileMenu = document.querySelector('.main-menu');
showOrCloseMenu();

function showOrCloseMenu() {
    burgerToggle.onclick = () => {
        burgerToggle.classList.toggle('burger-icon-active');
        mobileMenu.classList.toggle('mobile-menu-active');

        if (mobileMenu.classList.contains('mobile-menu-active')) {
            headerOverflow();
        } else {
            setTimeout(headerOverflow, 400);
        }
    };
}

function headerOverflow () {
    header.classList.toggle('show-menu')
}

//------------------------------- Digital sliders ---------------------------------------

jQuery(function ($) {
    $(document).ready(function () {

        //----------------------------------- text slider ----------------------------------------
        $('.text-slider').owlCarousel({
            lazyLoad: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            responsiveClass: true,
            loop: true,
            items: 1,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
        });

        if ($(".warning-input")) {
            $(".warning-input").after( "<p class='warning-massage-style'>Warning massage</p>" );
        }

        //-------------------------------- TABS -------------------------------

        $('.solutions-tabs-list li').click(function () {
            let tab_id = $(this).attr('data-tab');

            $('.solutions-tabs-list li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })

    });
});
