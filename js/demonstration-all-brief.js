"use strict"

jQuery(function ($) {
    $(document).ready(function () {
//----------------------------------- Edit brief pop-ups ----------------------------------------

        let submissionPrice = $('.submission-price'),
            congrats = $('.congrats'),
            oops = $('.oops'),
            popUps = [submissionPrice, congrats, oops];
        congrats.on('click', function () {
            $('.submission-price-pop-up').css('display', 'none');
        })
        oops.on('click', function () {
            $('.congrats-pop-up').css('display', 'none');
        })

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
            })
        })
    });
});