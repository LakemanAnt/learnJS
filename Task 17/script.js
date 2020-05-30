$(document).ready(function () {
    $('.buttonForm').on('click', () => {
        $('.modal').animate({
            height: 'toggle'
        }, 1000);

        $('.overlay').animate({
            opacity: 'toggle'
        }, 1000)
    })

    $('.close').on('click', () => {
        $('.modal').animate({
            height: 'toggle'
        }, 1000);

        $('.overlay').animate({
            opacity: 'toggle'
        }, 1000)
    })
})