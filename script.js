var numtop = 3;
$('.decor-panel .decor-panel__menu > li:lt(' + numtop + ')').css( "display", "block" );
$('.pagination-btn').click(function () {
    $('.decor-panel .decor-panel__menu > li:lt(' + (numtop += 8) + ')').fadeIn();
    if (numtop > $('.decor-panel .decor-panel__menu > li').length) {
        $('.decor-panel .decor-panel__menu > li:lt(' + (numtop += 8) + ')').fadeIn();
        $(this).fadeOut();
    }
});