"use strict"


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
    $(document).ready(function () {
        //----------------------------------- Date picker ----------------------------------------
        $('#submission-date').datepicker({
            minDate: 0,
        });
//----------------------------------- Edit text content ------------------------------------------
        let summaryText = $('.summary-text'),
            summaryTextContent = summaryText.text(),
            detailsText = $('.details-text'),
            detailsTextContent = detailsText.text();
//----------------------------------- Edit summary ------------------------------------------

        $('.edit-summary').on('click', function () {
            summaryText.addClass('editable-block')
            $('.summary-btns').show(200);
            summaryText.attr('contenteditable', 'true');
        })
        $('.cancel-summary').on('click', function () {
            $('.summary-btns').hide(200);
            summaryText.text(summaryTextContent);
            summaryText.removeClass('editable-block');
            summaryText.removeAttr('contenteditable');
        })
        $('.save-summary').on('click', function () {
            $('.summary-btns').hide(200);
            summaryTextContent = summaryText.text();
            summaryText.text(summaryTextContent);
            summaryText.removeClass('editable-block');
            summaryText.removeAttr('contenteditable');
        })
//----------------------------------- Edit details ------------------------------------------
        $('.edit-details').on('click', function () {
            detailsText.addClass('editable-block')
            $('.details-btns').show(200);
            detailsText.attr('contenteditable', 'true');
        })
        $('.cancel-details').on('click', function () {
            $('.details-btns').hide(200);
            detailsText.text(detailsTextContent);
            detailsText.removeClass('editable-block');
            detailsText.removeAttr('contenteditable');
        })
        $('.save-details').on('click', function () {
            $('.details-btns').hide(200);
            detailsTextContent = detailsText.text();
            detailsText.text(detailsTextContent);
            detailsText.removeClass('editable-block');
            detailsText.removeAttr('contenteditable');
        })

//----------------------------------- Edit brief pop-ups ----------------------------------------

        let clientEdit = $('.client-edit'),
            locationEdit = $('.location-edit'),
            budgetEdit = $('.budget-edit'),
            projectEdit = $('.project-edit'),
            projectRoles = $('.project-roles'),
            dateEdit = $('.date-edit'),
            popUps = [clientEdit, locationEdit, budgetEdit, projectEdit, projectRoles, dateEdit];

        jQuery.each(popUps, function () {
            $(this).on("click", function (e) {
                e.preventDefault();

                //------------------------------- Find pop-up -----------------------------
                let linkName = $(this).attr('class').split(' ')[1],
                    pop = $('.' + linkName + '-pop-up');

                //------------------------------- Show pop-up -----------------------------
                pop.fadeIn(300, function () {
                    $(this).focus();
                });
                //---------------------- Close on click out pop-up ------------------------
                $(document).on('click', function (e) {
                    if ($(e.target).is(pop)) {
                        pop.css('display', 'none');
                    }
                });

                //---------------------- Close on click btn ------------------------------
                $(".close-x").on('click', function () {
                    pop.css('display', 'none')
                })

                $(".got-it").on('click', function () {
                    pop.css('display', 'none')
                })
                //---------------------- Save client changes ------------------------------
                $('.company-name-save').on('click', function (e) {
                    e.preventDefault();
                    let inputValue = $('#name-company').val();
                    $('.company-name-subtitle').text(inputValue);
                    pop.css('display', 'none')
                })
                //---------------------- Save location changes -----------------------------
                $('.location-save').on('click', function (e) {
                    e.preventDefault();
                    let country = $('#country').val();
                    let state = $('#state').val();
                    let city = $('#city').val();
                    $('.location-subtitle-country').text(country);
                    $('.location-subtitle-city').text(city);
                    $('.location-subtitle-state').text(state);
                    pop.css('display', 'none')
                })
                //---------------------- Save budget changes -----------------------------
                $('.budget-save').on('click', function (e) {
                    e.preventDefault();
                    let currency = $('#currency').val(),
                        budget = $('#budget-amount').val(),
                        budgetTitle = $('.budget-subtitle');
                    console.log(currency, budget);
                    if (currency === 'UAH') {
                        budgetTitle.text(budget);
                        budgetTitle.prepend('<span>&#8372; </span>')
                    }
                    if (currency === 'USD') {
                        budgetTitle.text(budget);
                        budgetTitle.prepend('<span>&#36; </span>')
                    }
                    if (currency === 'EUR') {
                        budgetTitle.text(budget);
                        budgetTitle.prepend('<span>&#8364; </span>')
                    }
                    pop.css('display', 'none')
                })
                //---------------------- Save project changes ------------------------------
                $('.project-type-save').on('click', function (e) {
                    e.preventDefault();
                    let projectType = $('#project-type').val();
                    $('.project-subtitle').text(projectType);
                    pop.css('display', 'none')
                })

                //---------------------- Save project changes ------------------------------
                $('.project-roles-save').on('click', function (e) {
                    e.preventDefault();
                    let projectRolesArray = $('.tagify__tag-text');

                    projectRolesArray.each(function (i) {
                        let projectRolesAll = $(this).text() + ' ';
                        if (i === 0) {
                            $('.project-roles-tag').remove();
                        }
                        $('.project-roles-item-block').append('<a href="#" class="creator-tags project-roles-tag">' + '#' + projectRolesAll + '</a>')
                    })
                    pop.css('display', 'none')
                })
                //---------------------- Save date changes ------------------------------
                $('.date-save').on('click', function (e) {
                    e.preventDefault();
                    let dateNew = $('#submission-date').val(),
                        dateNewArr = dateNew.split('/'),
                        datetimeNew = dateNewArr[2] + '-' + dateNewArr[0] + '-' + dateNewArr[1];
                    console.log(dateNewArr)
                    $('.date-subtitle').attr('datetime', datetimeNew)
                    $('.date-subtitle').text(dateNew);
                    pop.css('display', 'none')
                })
            })
        })
    });
});

//----------------------------------- add New Attachment ----------------------------------------
let addNewAttachment = $(".addNewAttachment"),
    attachmentNum = $("#attachmentNum"),
    popUpsAttachmentBlock = $(".attachment-pop-up"),
    msg = $(".Msg");

addNewAttachment.on("click", addAttachment);

//--------------------------------------------------------------remove attachment
function clearAttachment(field) {
    //------------------------------- Show pop-up -----------------------------
        popUpsAttachmentBlock.fadeIn(300, function () {
            $(this).focus();
        });

        //---------------------- Close on click out pop-up ------------------------
        $(document).on('click', function (e) {
            if ($(e.target).is(popUpsAttachmentBlock)) {
                popUpsAttachmentBlock.css('display', 'none');
            }
        });

        //---------------------- Close on click btn ------------------------------
        $(".close-x").on('click', function () {
            popUpsAttachmentBlock.css('display', 'none')
        })

        $(".got-it").on('click', function () {
            popUpsAttachmentBlock.css('display', 'none')
        })
    //---------------------- Delete attachment ------------------------------
    $(".delete-attachment-btn").on('click', function () {
        msg.slideUp("fast");
        let name = $(field).closest("li").find("input[type = 'file']").attr("name").substr(5);
        $(field).closest("li").remove();
        let strNew = $(".file-block").length.toString();
        strNew = strNew + name;
        attachmentNum.val(strNew);
        let num = attachmentNum.val().length;
        if (num == 6) {
            $(".AttachmentFS .sureAdd").slideUp(500);
        }
        popUpsAttachmentBlock.css('display', 'none')
    })

}

//--------------------------------------------------------------add attachment
function addAttachment(field) {
    msg.slideUp("fast");
    $(".AttachmentFS .sureAdd").slideDown(500);
    let num = $(".file-block").length;
    num++;
    if (num < 7 && num > 0) {
        let str = num.toString(),
            id = str,
            inputId = '#' + 'Image' + id;
        $(".brief-attachemts-block").append("<li class='file-block'>" + "<label for='Image" + id + "' class='input-file-label'>Click to add file</label></label><input type='file' class='input-file' id='Image" + id + "' name='Image" + id + "'/><span class='input-close' onclick='clearAttachment(this)'></span> </li>");
        $(inputId).change(function () {
            let file = $(inputId)[0].files[0].name,
                format = file.split(".")
            $(this).prev('label').text(file);
            $(this).prev('label').append("<img src='img/append-" + format[1] + ".png' alt='Image icon' class='append-image'/>");
            $(".formats").append(format[1] + ', ')
        });
        let temp = str.substr(1);
        attachmentNum.val(temp);
    } else {
        //view message
        msg.slideDown("fast");
    }
}