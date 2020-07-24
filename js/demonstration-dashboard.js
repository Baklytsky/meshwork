

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

//----------------------------------- Selectors -------------------------------

let dropholderRoles = document.querySelector('.dropholder-roles'),
    dropdownRoles = document.querySelector('.dropdown-roles'),
    dropdownRolesOption = document.querySelector('.dropdownOption-roles'),
    dropholderLocation = document.querySelector('.dropholder-location'),
    dropdownLocationOption = document.querySelector('.dropdownOption-location'),
    dropdownLocation = document.querySelector('.dropdown-location');

//----------------------------------- Roles -----------------------------------
if (dropdownRoles) {
    dropdownRoles.addEventListener('click', ()=> {
        dropholderRoles.classList.toggle('active-roles')
        dropholderLocation.classList.remove('active-location')
    });
}

//----------------------------------- Location ---------------------------------
if (dropdownLocation) {
    dropdownLocation.addEventListener('click', ()=> {
        dropholderLocation.classList.toggle('active-location')
        dropholderRoles.classList.remove('active-roles')
    });
}
