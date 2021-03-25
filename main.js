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



//image rollover
//add event listeners
let gridItems = document.getElementsByClassName('grid-item');
function imageRollOver(e) {
    let elm = e.currentTarget;
    elm.classList.toggle('fade-img-a')
}
for(let i=0; i<gridItems.length; i++) {
    document.getElementsByClassName('grid-item')[i].addEventListener('click', imageRollOver);
}




//flesh effect
function flashEffect(e) {
    
}
document.getElementById('ageless').addEventListener('mouseover', flashEffect)