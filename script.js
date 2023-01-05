/* When clicked on the menu button, select all HTML elements with target class and toggle on them a change class. */

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})

/* Select all the icons from the section icons and create an index timer */

const icons = document.querySelectorAll('.section-1-icons i')
let i = 1;

/* Interval function to make the foods icons appears and disappear in a cycle way with a change class to hide and show */

setInterval(() => {
    i++
    const icon = document.querySelector('.section-1-icons .change')
    icon.classList.remove('change')

    if(i > icons.length) {
        icons[0].classList.add('change')
        i = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }

}, 4000)

