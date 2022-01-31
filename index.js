const hamburger = document.querySelector('.burger')
const header = document.querySelector('.main-head')
const nav = document.querySelector('.nav-links')
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    const links = document.querySelectorAll('.nav__item');
    links.forEach((item) => {
        item.addEventListener('click', () => {
            nav.className = 'nav-links nav-hidden';
            body.classList.remove('fixed')
            hamburger.classList.remove('open')
            header.classList.remove('sticky')
        })

    })
    hamburger.classList.toggle('open')
    body.classList.toggle('fixed')

    header.classList.toggle('sticky')

    if (nav.classList.contains('nav-hidden')) {
        nav.classList.remove('nav-hidden')
        nav.classList.add('nav-open')
    } else {
        nav.classList.remove('nav-open')
        nav.classList.add('nav-hidden')
    }
})
