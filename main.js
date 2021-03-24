document.getElementById('shop-link').addEventListener('mouseover', () => {
    document.getElementById('shop-container').classList.add('an-menu-up-vis')
})
document.getElementById('shop-link').addEventListener('mouseleave', () => {
    document.getElementById('shop-container').classList.remove('an-menu-up-vis')
})