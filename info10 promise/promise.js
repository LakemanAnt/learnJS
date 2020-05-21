//Without promise

// let drink = 0;

// function shoot(arrow, headshot, fail){
//     console.log('Вы сделали выстрел...')

//     setTimeout(function(){
//         Math.random() > .5 ? headshot({}) : fail("Вы промахнулись")
//     }, 3000)
// }

// function win(){
//     console.log('Вы победили!');
//     (drink == 1) ? buyBeer() : giveMoney()
// }

// function buyBeer(){
//     console.log('Вам купили пиво!')
// }

// function giveMoney(){
//     console.log('Вам заплатили!')
// }

// function loose(){
//     console.log('Вы проиграли!')
// }

// shoot({},
//         function(mark){
//             console.log('Вы попали в цель!')
//             win(mark, buyBeer, giveMoney)
//         },
//         function(miss){
//             console.error(miss)
//             loose()
//         }
//     )

//with promise
let drink = 1;

function shoot(arrow) {
  console.log("Вы сделали выстрел...");
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > 0.5 ? resolve({}) : reject("Вы промахнулись");
    }, 3000);
  });

  return promise;
}

function win() {
  console.log("Вы победили!");
  drink == 1 ? buyBeer() : giveMoney();
}

function buyBeer() {
  console.log("Вам купили пиво!");
}

function giveMoney() {
  console.log("Вам заплатили!");
}

function loose(text) {
  console.log(text);
  console.log("Вы проиграли!");
}

shoot({})
  .then((mark) => console.log("Мы попали в цель"))
  .then(win)
  .catch(loose);
