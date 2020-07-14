'use strict'

//--------------------------- Phone selector -----------------------

let input = document.querySelector("#phone");

let iti = intlTelInput(input, {
    initialCountry: "us"
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
                console.log(e.target)
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

//----------------------- Show password -----------------------------------

let showPassword =
    [document.querySelector('.current-password'),
        document.querySelector('.new-password'),
        document.querySelector('.confirm-password'),];

//----------------------- Show current password ----------------------------
showPassword.forEach(i => i.addEventListener('click', () => {
    let passName = i.className,
        passId = document.querySelector('#' + passName);
    if (passId.type === "password") {
        passId.type = "text";
    } else {
        passId.type = "password";
    }
}));

//----------------------- Add skills ----------------------------

(function($) {
    $.fn.tagify = function() {
        $('body').on('click', '.ui-tagify-remove', function() {
            let tag = $(this).parent('div'),
                tagText = tag.text().split('⨉');
            $(".delete-skill-pop-up").css('display', 'block')
            $(".skill-name").text(tagText[0]);
            $(".delete-skill").on('click', function() {
                tag.remove();
                $(".delete-skill-pop-up").css('display', 'none')
            })
            $(".cancel-skill").on('click', function() {
                $(".delete-skill-pop-up").css('display', 'none')
            })
            $(".close-x").on('click', function() {
                $(".delete-skill-pop-up").css('display', 'none')
            })
        });

        let wrap = document.createElement('div'),
            delimeters = [13], // comma
            length = delimeters.length,
            i = 0;
        $(wrap).addClass('ui-tagify-wrap').click(function() {
            this.focus();
        });
        this.css('display', 'block')
            .css('width', '100%')
            .wrap(wrap)
            .addClass('profile-input')
            .bind('keypress', function(event) {
                let charCode = event.which || event.keyCode,
                    charStr, tagContent;
                for (i = 0; i < length; i++) {
                    if (delimeters[i] === charCode) {
                        charStr = String.fromCharCode(charCode);
                        tagContent = $(this).val().split(charStr)[0].trim();
                        if (0 < tagContent.length) {
                            $("#skills-wrapper").before('<div class="ui-tagify-tag">'+ '#' + tagContent + '<a href="#" class="ui-tagify-remove">⨉</a></div>').val('');
                        }
                        event.preventDefault();
                        $(".tagify").val('');
                        break;
                    }
                }
            })
            .bind('keydown', function(event) {
                let charCode = event.which || event.keyCode;
                if(charCode === 8 && 0 === $(this).val().length) {
                    if ($('.ui-tagify-selected').length) {
                        $('.ui-tagify-selected').remove();
                    }
                    else if ($(this).prev().length) {
                        $(this).prev().addClass('ui-tagify-selected');
                    }
                }
            });
        // returns the div wrapper, does this make the most sense?
        return this.parent();
    };
})(jQuery);

$(".tagify").tagify();