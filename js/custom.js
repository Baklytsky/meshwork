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

//------------------------------- Search block ---------------------------------------

let navigationSelect = document.querySelector('.status-selector'),
    searchInput = document.querySelector('.search-text');

                //------------- Status selector ---------------------------------------
function initSelect(elem) {
    let selectHolder = elem.querySelector('.holder'),
        selectOptions = elem.querySelectorAll('.dropdownOption li'),
        dropHolder = elem.querySelector('.dropdown'),
        iconOpen = elem.querySelector('.icon-down-open-big'),
        selectedOption = selectOptions[0];

    selectedOption.classList.add('current');

    selectHolder.addEventListener('click', function () {
        dropHolder.classList.toggle('active');
    });

    iconOpen.addEventListener('click', function () {
        dropHolder.classList.toggle('active');
    });

    selectOptions.forEach(function(currentElement) {
        currentElement.addEventListener('click', function(){
            selectedOption.classList.remove('current');
            selectedOption = currentElement;
            currentElement.classList.add('current');
            selectHolder.textContent = currentElement.textContent;
            dropHolder.classList.toggle('active');
        });
    });
}

initSelect(navigationSelect);

                //------------- Search input ---------------------------------------