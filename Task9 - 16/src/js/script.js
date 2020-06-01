window.addEventListener('DOMContentLoaded', () => {

    let calc = require('./parts/calc.js');
    let form = require('./parts/form.js');
    let slider = require('./parts/slider.js');
    let tabs = require('./parts/tabs.js');
    let timer = require('./parts/timer.js');
    let modal = require('./parts/modal.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
})