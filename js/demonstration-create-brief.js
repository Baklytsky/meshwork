'use strict'

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


//----------------------------------- Date picker ----------------------------------------
jQuery(function ($) {
    $(document).ready(function () {
        $('#submission-date').datepicker({
            minDate: 0,
        });
    });
});
//----------------------------------- add New Attachment ----------------------------------------
let addNewAttachment = $(".addNewAttachment"),
    attachmentNum = $("#attachmentNum"),
    msg = $(".Msg");

    addNewAttachment.on("click", addAttachment);

//--------------------------------------------------------------remove attachment
function clearAttachment(field) {
    msg.slideUp("fast");
    let name = $(field).closest("div").find("input[type = 'file']").attr("name").substr(5);
    $(field).closest("div").remove();
    let strNew = attachmentNum.val().toString();
    strNew = strNew + name;
    attachmentNum.val(strNew);
    let num = attachmentNum.val().length;
    if (num == 6) {
        $(".AttachmentFS .sureAdd").slideUp(500);
    }
}

//--------------------------------------------------------------add attachment
function addAttachment(field) {
    msg.slideUp("fast");
    $(".AttachmentFS .sureAdd").slideDown(500);
    let num = attachmentNum.val().length;
    if (num < 7 && num > 0) {
        let str = attachmentNum.val().toString(),
            id = str.charAt(0).toString(),
            inputId = '#' + 'Image' + id;
        $(".attachmentContainer").append("<div class='file-block'>" + "<label for='Image" + id + "' class='input-file-label'>Click to add file</label></label><input type='file' class='input-file' id='Image" + id + "' name='Image" + id + "'/><span class='input-close' onclick='clearAttachment(this)'></span> </div>");
        $(inputId).change(function() {
            let file = $(inputId)[0].files[0].name,
                format = file.split(".")
            $(this).prev('label').text(file);
            $(this).prev('label').append("<img src='img/append-" + format[1] + ".png' alt='Image icon' class='append-image'/>");
            $(".formats").append(format[1] + ', ' )
        });
        let temp = str.substr(1);
        attachmentNum.val(temp);
    }
    else {
        //view message
        msg.slideDown("fast");
    }
}



