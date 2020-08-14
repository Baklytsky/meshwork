'use strict'


jQuery(function ($) {
    $(document).ready(function () {
        //----------------------------------- Date picker ----------------------------------------
        $('#submission-date').datepicker({
            minDate: 0,
        });
        //----------------------------------- Publish pop-up ----------------------------------------
        $('.publish-brief-btn').on('click', function (e) {
            e.preventDefault();
            $('.brief-publish-pop-up').css('display', 'block');
        })
        $('.close-x').on('click', function () {
            $('.brief-publish-pop-up').css('display', 'none');
        })
        $('.got-it').on('click', function () {
            $('.brief-publish-pop-up').css('display', 'none');
        })
        $(document).on('click', function(e) {
            if ($(e.target).is($('.brief-publish-pop-up'))) {
                $('.brief-publish-pop-up').css('display', 'none');
            }
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
//-------------------------------------------------------------- Choose Roles
let input = document.querySelector('input[name=tags-outside]');

let tagify = new Tagify(input, {
    whitelist: ["videographer", "director", "documentary", "cameraman", "goodman", "superman"],
    enforceWhitelist: true,
    skipInvalid: true,
    dropdown: {
        position: "input",
        enabled : 0 // always opens dropdown when input gets focus
    }
})
jQuery(function ($) {
    $(document).scroll(function () {
        $('.tagify__dropdown--input').hide("fast");
    })
});


