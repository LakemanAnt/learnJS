window.addEventListener('DOMContentLoaded', function () {
    //Tabs
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

    //Timer
    let deadline = '2020-05-25'

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date())
        hours = addForNull(Math.floor((t/(1000*60*60))))
        minutes = addForNull(Math.floor((t/1000/60) % 60))
        seconds = addForNull(Math.floor((t/1000) % 60))
        
        return{
            'total' : t,
            'hours' : hours,
            'minutes': minutes,
            'seconds': seconds 
        }
    }

    function addForNull(number){
        return number.length == 1 ? "0"+number : number
    } 

    function setClock(id,endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds')
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours
            minutes.textContent = t.minutes
            seconds.textContent = t.seconds

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock('timer', deadline);

    // Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll(".description-btn");
    
    more.addEventListener('click',function(){
        overlay.style.display = 'block'
        this.classList.add('more-splash')
        document.body.style.overflow = 'hidden'
    })
    
    close.addEventListener('click',function(){
        overlay.style.display = 'none'
        more.classList.remove('more-splash')
        document.body.style.overflow = ''
    })

    descriptionBtn.forEach((item) =>{
        item.addEventListener('click',function(){
            overlay.style.display = 'block'
            this.classList.add('more-splash')
            document.body.style.overflow = 'hidden'
        })
    })


    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так('
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status')

    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest()

        request.open('POST', 'server.php')
        request.setRequestHeader ('Context-Type', 'application/json; charset=utf-8')

        let formData = new FormData(form)

        let obj = {}
        //перевод формдата в простой обьект
        formData.forEach(function(value, key){
            obj[key] = value
        })
        let json = JSON.stringify(obj);
        request.send(json)

        request.addEventListener('readystatechange', ()=>{
            if (request.readyState < 4 ){
                statusMessage.innerHTML = message.loading
            } else if(request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = message.success
            } else {
                statusMessage.innerHTML = message.failure
            }
        })

        for (let i=0; i < input.length; i++){
            input[i].value = '';
        }
    })

    //Login form

    let loginForm = document.querySelector('#form'),
        inputLogin = loginForm.getElementsByTagName('input');
    
    loginForm.addEventListener('submit', (event)=>{
        event.preventDefault()
        loginForm.appendChild(statusMessage);
    
        let request = new XMLHttpRequest()

        request.open('POST', 'server.php')
        request.setRequestHeader ('Context-Type', 'application/json; charset=utf-8')

        let formData = new FormData(loginForm)

        let obj = {}
        //перевод формдата в простой обьект
        formData.forEach(function(value, key){
            obj[key] = value
        })
        let jsonInfo = JSON.stringify(obj);
        request.send(jsonInfo)

        request.addEventListener('readystatechange', ()=>{
            if (request.readyState < 4 ){
                statusMessage.innerHTML = message.loading
            } else if(request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = message.success
            } else {
                statusMessage.innerHTML = message.failure
            }
        })
        console.log(inputLogin.length)
        for (let i=0; i < inputLogin.length; i++){
            inputLogin[i].value = '';
        }

    })
})