//----------------------------------- Inbox -------------------------------

jQuery(function ($) {
    let rightInboxBlock = $(".right-inbox-massage");
        scrollToBottom();
    //----------------------------------- Show right Inbox section ---------------------------------
    if (parseInt($(window).width()) < 768) {
        $('.massage-author').on('click', function() {
            $(".right-inbox-block").css("display","flex")
            $(".left-inbox-block").css("display","none")
            $(".mobile-inbox-search-block").css("display","none")
            $(".business-inbox-content").css("padding","0")
            $(".mobile-block-title").css("display","none")
            $(".selected-author-name-block").css("display","flex")
            scrollToBottom();
        });
        $('.back-to-inbox').on('click', function() {
            $(".right-inbox-block").css("display","none")
            $(".left-inbox-block").css("display","block")
            $(".mobile-inbox-search-block").css("display","block")
            $(".business-inbox-content").css("padding","0 15px")
            $(".mobile-block-title").css("display","block")
            $(".selected-author-name-block").css("display","none")
        });
    }
    function scrollToBottom() {
       let massageBlockHeight = rightInboxBlock.height();
       rightInboxBlock.scrollTop(massageBlockHeight);
    }
});