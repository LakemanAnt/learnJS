// localStorage.setItem("number", 1)

// console.log(localStorage.getItem("number"))

//localStorage.removeItem("number")

//localStorage.clear()

window.addEventListener("DOMContentLoaded", () => {

    let checkbox = document.getElementById('rememberMe')
    let change = document.getElementById("change")
    let main = document.querySelector(".main");
    if (localStorage.getItem("isChecked") === "true") {
        checkbox.checked = true
    }

    if (localStorage.getItem("bg") === "changed") {
        main.style.backgroundColor = "#FFFF99"
    }

    checkbox.addEventListener('click', () => {
        localStorage.setItem("isChecked", true)
    })

    change.addEventListener('click', () => {
        localStorage.setItem('bg', 'changed')
    })

    let persone = {
        name: "Alex",
        age: 35,
        tech: ["mobile", "notebook"]
    }

    let serializedPersone = JSON.stringify(persone)

    localStorage.setItem("Alex", serializedPersone)

    console.log(JSON.parse(localStorage.getItem("Alex")))

})