
$(document).ready(function () {

    $('.question').click(function () {
        $(this).next('.answer').slideToggle();
    });


    $('#showAll').click(function () {
        $('.answer').slideDown();
    });


    $('#hideAll').click(function () {
        $('.answer').slideUp();
    });


    $('.question').mouseenter(function () {
        $(this).addClass('hovered');
    }).mouseleave(function () {
        $(this).removeClass('hovered');
    });
});
