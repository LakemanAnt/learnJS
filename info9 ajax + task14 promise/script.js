const inputRub = document.getElementById('rub')
const inputUsd = document.getElementById('usd')

function calc() {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        // request.open(method, url, async, login, pass);
        request.open('GET', './current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        request.send()

        //status (404,403)
        //statusText (ok,not found)
        //responseText /response данные с сервера
        //readyState

        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status == 200) {
                resolve(request.response)
            } else if (request.status != 200) {
                reject()
            }
        })
    })
}


inputRub.addEventListener('input', () => {
    calc()
        .then((item) => {
            let data = JSON.parse(item)
            inputUsd.value = inputRub.value / data.usd
        })
        .catch(() => console.log('Error'))

})

// use fetch  (no need calc())
inputRub.addEventListener('input', () => {
    fetch('./current.json')
        .then(res => res.json())
        .then((item) => {
            inputUsd.value = inputRub.value / item.usd
        })
        .catch(console.log)

})