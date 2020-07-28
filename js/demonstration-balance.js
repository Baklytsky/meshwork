'use strict'

//------------- Buy MESH Pop-up -----------------------------------
$(".buy-mesh-btn").on('click', function(e) {
    e.preventDefault();
    $(".balance-pop-up").fadeIn(300, function () {
        $(this).focus();
    });
});
$(".close-x").on('click', function() {
    $(".balance-pop-up").css('display', 'none')
})
$(".got-it").on('click', function() {
    $(".balance-pop-up").css('display', 'none')
})
$(document).on('click', function(e) {
    if ($(e.target).is('.balance-pop-up')) {
        $('.balance-pop-up').css('display', 'none');
    }
});





