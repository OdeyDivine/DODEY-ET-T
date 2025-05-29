const menu = document.querySelector("#menu")
const nav = document.querySelector("ul")
const closed = document.querySelector("#closed")

menu.addEventListener("click", () => {
    nav.classList.toggle("visible")
})
closed.addEventListener("click", () => {
    nav.classList.remove("visible")
})

// const back = document.querySelector("body")
// const colour = prompt("Enter a colour for the background")
// back.style.color = colour