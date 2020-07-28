

//----------------------------------- Selectors -------------------------------

jQuery(function ($) {
    //----------------------------------- Location ---------------------------------
    $('.dropdown-location').on('click', function(e) {
        $(".dropdownOption-location").slideToggle("fast");
        $('.dropholder-location').toggleClass('active-location');
    });
    $(document).on("click", function(event){
        let $trigger = $(".location-selector");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdownOption-location").slideUp("fast");
            $('.dropholder-location').removeClass('active-location');
        }
    });
    //----------------------------------- Roles -----------------------------------
    $('.dropdown-roles').on('click', function(e) {
        $(".dropdownOption-roles").slideToggle("fast");
        $('.dropholder-roles').toggleClass('active-roles');
    });
    $(document).on("click", function(event){
        let $trigger = $(".roles-selector");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdownOption-roles").slideUp("fast");
            $('.dropholder-roles').removeClass('active-roles');
        }
    });
});
