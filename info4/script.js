let btn = document.querySelectorAll('button'),
    wrap = document.querySelector(".wrapper"),
    link = document.querySelector('a');




// btn[0].addEventListener('click', (event) => {
//     console.log('event: ' + event.type + " in " +
//         event.target)
// });

wrap.addEventListener('click', (event) => {
    console.log('event: ' + event.type + " in " +
        event.target)
})

link.addEventListener('click', (event) => {
    //убираем стандартное поведение событий браузера
    event.preventDefault()
    console.log('event: ' + event.type + " in " +
        event.target)
})

btn.forEach((item) => {
    item.addEventListener('mouseleave', (event) => {
        console.log("no no no")
    })
})
// btn[0].addEventListener('mouseenter', () => {
//     alert('op')
// })