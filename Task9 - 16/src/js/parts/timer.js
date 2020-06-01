function timer() {
    let deadline = '2020-05-25'

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date())
        hours = addForNull(Math.floor((t / (1000 * 60 * 60))))
        minutes = addForNull(Math.floor((t / 1000 / 60) % 60))
        seconds = addForNull(Math.floor((t / 1000) % 60))
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function addForNull(number) {
        return number.toString().length == 1 ? "0" + number : number
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds')
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
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

}

module.expoorts = timer;