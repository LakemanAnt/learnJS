$(document).ready(function () {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    })

    $('.list-item:eq(2)').on('click', () => {
        $('.image:even').fadeToggle('slow')
    });

    $('.list-item:eq(4)').on('click', () => {
        $('.image:odd').animate({
            opacity: 'toggle',
            width: 'toggle',
            height: 'toggle'
        }, 3000);
    });

})

//замена jqery нативом
//document.querySelectorAll('.list-item').forEach();
// .classList
//.addEventListener
//$.ajax - fetch
//animation