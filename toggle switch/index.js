
$(".switch").click(function () {
    if ($('.switch').hasClass('on-animationright')) {
        $('.switch').removeClass('on-animationright')
        $('.switch').addClass('on-animationleft')
        $('.toggle-switch').css('background-color', ' rgb(226, 30, 30)')

    }
    else {
        $('.switch').removeClass('on-animationleft')

        $('.switch').addClass('on-animationright')

        $('.toggle-switch').css('background-color', 'green')
    }


})
