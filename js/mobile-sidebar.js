'use strict';

let burgerToggle = $('.burger-icon'),
    mobileMenu = $('.dashboard-sidebar'),
    overlay = $('.menu-overlay'),
    dashboardSection = $('.dashboard-section');
burgerToggle.click(function () {
    burgerToggle.toggleClass('burger-icon-active');
    mobileMenu.toggleClass('mobile-menu-active');
    overlay.toggleClass('active-menu-overlay');
    dashboardSection.toggleClass('hidden');
});
overlay.click(function () {
    burgerToggle.toggleClass('burger-icon-active');
    mobileMenu.toggleClass('mobile-menu-active');
    overlay.toggleClass('active-menu-overlay');
    dashboardSection.toggleClass('hidden');
});
