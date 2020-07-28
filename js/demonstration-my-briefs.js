'use strict'

//----------------------------------- Isotop -----------------------------------

jQuery(function ($) {

    $(document).ready(function () {
        let $grid = $('.creators-list').isotope({
            itemSelector: '.creator-card-item',
            layoutMode: 'fitRows',
        });
        $('.filters-button-group').on( 'click', 'button', function() {
            let filterValue = $( this ).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        $('.button-group').each( function( i, buttonGroup ) {
            let $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.active-btn-filter').removeClass('active-btn-filter');
                $( this ).addClass('active-btn-filter');
            });
        });
    });
});
//----------------------------------- Filter dropdown -----------------------------------
jQuery(function ($) {
    if (parseInt($(window).width()) < 992) {
        $('.dropdown-toggle').click(function(){
            $(this).next('.filters-button-group').toggle();
            $('.btn-filter').click(function() {
                let filterValue = $(this).text();
                $('.dropdown-toggle').text(filterValue);
            });
        });

        $(document).click(function(e) {
            let target = e.target;
            if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
                $('.filters-button-group').hide();
            }
        });
    }
});
