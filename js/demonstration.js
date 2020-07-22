'use strict'
//********************************************MENU*******************************************
$(".delay-link").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    if (parseInt($(window).width()) < 992) {
        setTimeout(function(){
                $(".burger-icon").toggleClass("burger-icon-active")
                $(".main-menu").toggleClass("mobile-menu-active")
                $("header").removeClass("show-menu")
            },
            400);
    }
});

// ******************************************** Footer - MENU *******************************************
$("#footer-menu").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
//------------- Header on Scroll --------------------------------------
window.addEventListener('scroll', ()=> {
    let header = document.querySelector('header');
    header.classList.toggle('sticky-header', window.scrollY > 750);
})
//------------- Search autocomplete -----------------------------------

let searchInput = document.querySelector('.search-text'),
    autocompleteBlock = document.querySelector('.autocomplete-list');

function showAutocompleteBlock() {
    searchInput.addEventListener('click', () => {
        autocompleteBlock.classList.toggle('autocomplete-list-active')
    })
}
showAutocompleteBlock();

//------------- Pop-up Sign-in -----------------------------------

let signIn = document.querySelector('.log-in'),
    signInFormBtn = document.querySelector('.sign-link-in'),
    signUpFormBtn = document.querySelector('.sign-link-up'),
    signUp = document.querySelector('.sign-up'),
    signInPopUp = document.querySelector('.log-in-pop-up'),
    signUpPopUp = document.querySelector('.sign-up-pop-up'),
    cookie = document.querySelector('.cookie-pop-up'),
    cookieAlert = document.querySelector('.cookie-alert'),
    learnMoreCookie = document.querySelector('.cookie'),
    acceptCookie = document.querySelector('.cookie-btn'),
    gotIt = document.querySelector('.got-it'),
    closeX = document.querySelectorAll('.close-x'),
    openPopUpBlock = [signIn, signUp, learnMoreCookie];

//------------- OPEN Pop-up -----------------------------------
openPopUpBlock.forEach(i => i.addEventListener('click', () => {
    let linkName =  i.className,
        pop = document.querySelector('.'+ linkName + '-pop-up');
    pop.style.display = 'block'
    closePopUp(pop);
    outBlockClick(pop);
}));

//------------- CLOSE Pop-up -----------------------------------

function closePopUp(pop) {
    closeX.forEach(i => i.addEventListener('click', () => {
        pop.style.display = "none";
    }));
}

function outBlockClick(pop) {
    if (pop.style.display === "block") {
        document.body.addEventListener('mousedown', function (e) {
            if (e.target === pop) {
                pop.style.display = "none";
            }
        })
    }
}

//------------- Pop-up Sign-in -----------------------------------
signUpFormBtn.addEventListener('click', showSignUpPopUp);
signIn.addEventListener('click', showSignInPopUp);
function showSignInPopUp() {
    signUpPopUp.style.display = 'none';
    signInPopUp.style.display = 'block';
}

//------------- Pop-up Sign-up -----------------------------------

signInFormBtn.addEventListener('click', showSignInPopUp);
signUp.addEventListener('click', showSignUpPopUp);
function showSignUpPopUp() {
    signInPopUp.style.display = 'none';
    signUpPopUp.style.display = 'block';
}
//------------- Pop-up Cookie -----------------------------------

function showCookieAlert() {
    setTimeout(function(){
        cookieAlert.style.display = 'flex';
    },2000);
}
showCookieAlert();

acceptCookie.addEventListener('click', closeCookieAlert);
gotIt.addEventListener('click', closeCookiePopUp);


function closeCookieAlert() {
    cookieAlert.style.display = 'none';
}

function closeCookiePopUp() {
    cookie.style.display = 'none';
}