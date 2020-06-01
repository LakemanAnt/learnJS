function form() {

    //Form with promise

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так('
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        form.appendChild(statusMessage);
        let formData = new FormData(form)

        let obj = {}
        //перевод формдата в простой обьект
        formData.forEach(function (value, key) {
            obj[key] = value
        })
        let json = JSON.stringify(obj);

        function postData(json) {
            return new Promise((resolve, reject) => {
                let request = new XMLHttpRequest()

                request.open('POST', 'server.php')
                request.setRequestHeader('Context-Type', 'application/json; charset=utf-8')

                request.send(json)

                request.addEventListener('readystatechange', () => {
                    if (request.readyState < 4) {
                        resolve()
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve()
                    } else {
                        reject()
                    }
                })


            })
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(json)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .finally(clearInput())
    })


    //Login form

    let loginForm = document.querySelector('#form'),
        inputLogin = loginForm.getElementsByTagName('input');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()
        loginForm.appendChild(statusMessage);

        let request = new XMLHttpRequest()
        request.open('POST', 'server.php')
        request.setRequestHeader('Context-Type', 'application/json; charset=utf-8')

        let formData = new FormData(loginForm)

        let obj = {}
        //перевод формдата в простой обьект
        formData.forEach(function (value, key) {
            obj[key] = value
        })
        let jsonInfo = JSON.stringify(obj);
        request.send(jsonInfo)

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success
            } else {
                statusMessage.innerHTML = message.failure
            }
        })
        console.log(inputLogin.length)
        for (let i = 0; i < inputLogin.length; i++) {
            inputLogin[i].value = '';
        }
    })


}
module.exports = form;