// function User(name, id){
//     this.name = name
//     this.id = id
//     this.human = true

//     this.hello = function(){
//         console.log('Hello! ' + this.name)
//     }
  
// }

// User.prototype.exit = function(name){
//     console.log(this.name + " left")
// }

// let ivan = new User('Ivan',25)
// let alex = new User('Alex',20)

// console.log(ivan)
// console.log(alex)

// ivan.exit()
// function showThis(a,b){
//    console.log(this)
//    function sum(){
//        console.log(this)
//        return a + b
//    }
//    console.log(sum())
// }

// showThis(4,5)
// showThis(5,5)

// let obj = {
//     a: 12,
//     b: 15,
//     sum: function(){
//         console.log(this)
//         function shout(){
//             console.log(this)
//         }
//         shout()
//     }
// }

// obj.sum()

// let user = {
//     name: "John"
// }

// function sayName(surname){
//     console.log(this)
//     console.log(this.name + " " + surname)
// }

// console.log(sayName.call(user, 'Smit'))
// console.log(sayName.apply(user, ['Snow']))

// function count(number){
//     return this * number
// }

// let double = count.bind(2)

// console.log(double(2))

let btn = document.querySelector('button'),
    age = document.getElementById('age');

btn.addEventListener('click', function(){
    console.log(this)
    this.style.backgroundColor = 'gray'

    showUser.call(age,"Din","Don")
})

function showUser(surname, name) {
    console.log(this)
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
// 1) Простой вызов функции - windoww/undefined
// 2) Метод обьекта - this = обьект
// 3) Конструктор (new) - this = новый созданый обьект
// 4) Указание конкртного контекста - call, apply, bind