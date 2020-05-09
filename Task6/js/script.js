let menuItems = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu"),
    title = document.getElementById("title"),
    itemForDelete = document.querySelector(".adv"),
    blockForText = document.querySelector(".prompt")

menu.insertBefore(menuItems[1], menuItems[3])
document.body.style.backgroundImage = "url(img/apple_true.jpg)"

textTitle = title.innerText.split(" ");
textTitle[2] += " подлинную"
title.innerText = textTitle.join(" ")

itemForDelete.parentElement.removeChild(itemForDelete)

question = prompt("Как? ", "")
blockForText.innerText = question