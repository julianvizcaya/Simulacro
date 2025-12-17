const headerEffect = document.getElementById('header__effect')

function setFixed() {
    const activar = 80 

    if (window.scrollY >= activar) {
        if (!headerEffect.classList.contains('fixed'))
        headerEffect.classList.add('fixed')

        document.body.style.paddingTop = headerEffect.offsetHeight + 'px'
    } else {
        headerEffect.classList.remove('fixed')
        document.body.style.paddingTop = '0px'
    }
}

window.addEventListener('scroll', setFixed)
window.addEventListener('load', setFixed)