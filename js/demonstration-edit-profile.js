'use strict'

//--------------------------- Phone selector -----------------------

let input = document.querySelector("#phone");

let iti = intlTelInput(input, {
    initialCountry: "us",
    numberType: "MOBILE",
    separateDialCode: true,
});

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

//-------------------------------------------------------------- Choose skills
let inputSelectorProfile = document.querySelector('input[name=tags-outside-profile]');
// init Tagify script on the above inputs

let tagifyProfile = new Tagify(inputSelectorProfile, {
    whitelist: ["videographer", "director", "documentary", "cameraman", "goodman", "superman"],
    enforceWhitelist: true,
    skipInvalid: true,
    dropdown: {
        position: "input",
        enabled : 0 // always opens dropdown when input gets focus
    }
})
jQuery(function ($) {
    $(window).scroll(function () {
        $('.tagify__dropdown').hide();
    })
});

//----------------------- Verify btn ----------------------------
$('body').on('click', '.verify-btn', function () {
    $(".verify-pop-up").css('display', 'block');
    //----------------------- Countdown Timer ----------------------------

    function createTimer(time) {
        let counter = document.getElementById('cycleTimer').getContext('2d');
        let no = time;
        let pointToFill = 4.72;
        let cw = counter.canvas.width;
        let ch = counter.canvas.height;
        let diff;

        function fillCounter() {
            diff = ((no / time) * Math.PI * 2 * 10);
            counter.clearRect(0, 0, cw, ch);
            counter.lineWidth = 3;
            counter.fillStyle = '#000';
            counter.setLineDash([1, 1]);
            counter.strokeStyle = '#BFCDDA';
            counter.textAlign = 'center';
            counter.font = "24px monospace";
            counter.fillText(no, 50, 55);
            counter.beginPath();
            counter.arc(50, 50, 35, pointToFill, diff / 10 + pointToFill);
            counter.stroke();

            if (no === 0) {
                clearTimeout(fill);
            }
            no--;
        }

        let fill = setInterval(fillCounter, 1000);
    }

    createTimer(60);

    $(".close-x").on('click', function() {
        $(".verify-pop-up").css('display', 'none')
    })
});

$(document).on('click', function(e) {
    if ($(e.target).is('.verify-pop-up')) {
        $('.verify-pop-up').css('display', 'none');
    }
});


