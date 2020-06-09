'use strict'


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
    signUp = document.querySelector('.register-btn'),
    signInPopUp = document.querySelector('.sign-in'),
    signUpPopUp = document.querySelector('.sign-up'),
    cookie = document.querySelector('.cookie'),
    cookieAlert = document.querySelector('.cookie-alert'),
    learnMoreCookie = document.querySelector('.cookie-link'),
    acceptCookie = document.querySelector('.cookie-btn'),
    gotIt = document.querySelector('.got-it'),
    closeX = document.querySelectorAll('.close-x');

//------------- CLOSE Pop-up -----------------------------------

closeX.forEach(i => i.addEventListener('click', closePopUp));
function closePopUp() {
    signInPopUp.style.display = 'none';
    signUpPopUp.style.display = 'none';
    cookie.style.display = 'none';
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

learnMoreCookie.addEventListener('click', showCookiePopUp);
acceptCookie.addEventListener('click', closeCookieAlert);
gotIt.addEventListener('click', closeCookiePopUp);

function showCookiePopUp() {
    cookie.style.display = 'block';
}

function closeCookieAlert() {
    cookieAlert.style.display = 'none';
}

function closeCookiePopUp() {
    cookie.style.display = 'none';
}