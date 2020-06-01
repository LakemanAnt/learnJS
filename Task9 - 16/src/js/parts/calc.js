function cal() {
    //Calc

    let persons = document.querySelectorAll('.counter-block-input')[0];
    let restDays = document.querySelectorAll('.counter-block-input')[1];
    let place = document.querySelector('#select')
    let totalValue = document.querySelector('#total')
    let personsSum = 0
    let daysSum = 0
    let total = 0
    let coef = 1;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function () {
        personsSum = +this.value;
        if (restDays.value == "" || +restDays.value < 1 ||
            persons.value == "" || +persons.value < 1) {
            totalValue.innerHTML = 0
        } else {
            total = ((daysSum + personsSum) * 4000) * coef
            totalValue.innerHTML = total
        }
    })

    restDays.addEventListener('input', function () {
        daysSum = +this.value;
        if (restDays.value == "" || +restDays.value < 1 ||
            persons.value == "" || +persons.value < 1) {
            totalValue.innerHTML = 0
        } else {
            total = ((daysSum + personsSum) * 4000) * coef
            totalValue.innerHTML = total
        }
    })

    place.addEventListener('change', function () {
        if (restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0
        } else {
            coef = this.options[this.selectedIndex].value
            total = ((daysSum + personsSum) * 4000) * coef
            totalValue.innerHTML = total
        }
    })

}
module.exports = calc;