const burger = document.getElementById('burger')
const navLinks = document.getElementsByClassName('nav-links')

// console.log(navLink)

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementsByClassName('nav-links');

    // Add the 'hide' class to all nav-links elements
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add('hide');
    }
})

burger.addEventListener('click', () => {
    if (navLinks.length > 0 && navLinks[0].classList.contains('hide')) {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('hide');
            navLinks[i].classList.add('show');
        }
    } else {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('show');
            navLinks[i].classList.add('hide');
        }
    }
})