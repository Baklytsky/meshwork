'use strict'

let dropholderSearch = document.querySelector('.dropholder-search'),
    dropdownSearch = document.querySelector('.dropdown-search-btn');

//----------------------------------- Search -----------------------------------
if (dropdownSearch) {
    dropdownSearch.addEventListener('click', ()=> {
        dropholderSearch.classList.toggle('active-search')
    });
}

//----------------------------------- Isotop -----------------------------------

jQuery(function ($) {

    $(document).ready(function () {
        let $grid = $('.creators-list').isotope({
            itemSelector: '.creator-card-item',
            layoutMode: 'fitRows'
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

