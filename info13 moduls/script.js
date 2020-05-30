//анонамния функция которая сразу запускаеться
// let number = 1;

// (function () {
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3)
// }())

// console.log(number);

let user = (function () {
    let private = function () {
        console.log('I am private')
    }

    let sayHello = function () {
        console.log('Hello')
    }
    return {
        sayHello: sayHello
    }
}())

console.log(user);
console.log(user.sayHello())