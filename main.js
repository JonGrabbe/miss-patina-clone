// document.getElementById('shop-link').addEventListener('mouseover', () => {
//     document.getElementById('shop-container').classList.add('an-menu-up-vis')
// })
// document.getElementById('shop-link').addEventListener('mouseleave', () => {
//     document.getElementById('shop-container').classList.remove('an-menu-up-vis')
// })



//scroll
window.onscroll = function() {
    let hasScrolled = document.getElementById('header').classList.contains('scroll-down');
    if(scrollY > 0) {
        document.getElementById('header').classList.add('scroll-down')
        return
    }
    if(scrollY == 0 && hasScrolled) {
        document.getElementById('header').classList.remove('scroll-down')
    }
}