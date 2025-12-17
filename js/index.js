const headerEffect = document.getElementById('header__effect')

function setSticky() {
    const activar = 80 

    if (window.scrollY >= activar) {
        if (!headerEffect.classList.contains('sticky'))
        headerEffect.classList.add('sticky')

        document.body.style.paddingTop = headerEffect.offsetHeight + 'px'
    } else {
        headerEffect.classList.remove('sticky')
        document.body.style.paddingTop = '0px'
    }
}

window.addEventListener('scroll', setSticky)
window.addEventListener('load', setSticky)