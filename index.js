const navToggle = document.querySelector('.navbar-toggler-btn')
const navList = document.querySelector('.navbar-list')
const scrollUp = document.querySelector('.scroll-up')

/* navigation bar hamburger menu toggler */
navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav-list-active')
})


/* Scroll up */
document.addEventListener(
    'scroll',
    () => {
        scrollUp.addEventListener('click', () => { window.scrollTo(0,0) })
    }
)