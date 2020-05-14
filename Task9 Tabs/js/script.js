window.addEventListener('DOMContentLoaded', function () {

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(idFirst) {
        for (let i = idFirst; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show')
            tabContent[i].classList.add('hide')
        }
    }

    hideTabContent(1)

    function showTabContent(idContent) {
        if (tabContent[idContent].classList.contains('hide')) {
            tabContent[idContent].classList.remove('hide')
            tabContent[idContent].classList.add('show')
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0)
                    showTabContent(i)
                    break
                }
            }
        }
    })
})