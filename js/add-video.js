'use strict';

//--------------------------- Pop-up on click sub menu links -----------------

let addVideo = document.querySelector('.add-video');
    subMenuLinks = [addVideo];


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