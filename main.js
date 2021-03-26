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
function imageRollMouseOn(e) {
    let elm = e.currentTarget;
    elm.classList.add('fade-img-a');
}
function imageRollMouseLeave(e) {
    let elm = e.currentTarget;
    elm.classList.remove('fade-img-a');
}
for(let i=0; i<gridItems.length; i++) {
    document.getElementsByClassName('grid-item')[i].addEventListener('mouseover', imageRollMouseOn);
    document.getElementsByClassName('grid-item')[i].addEventListener('mouseleave', imageRollMouseLeave);
}




//flesh effect
function flashEffectDown(e) {
    document.getElementById('ageless').classList.add('flash-effect-start-down');
    document.getElementById('ageless').classList.remove('flash-effect-start-up');
}
function flashEffectUp(e) {
    document.getElementById('ageless').classList.add('flash-effect-start-up');
}
document.getElementById('ageless').addEventListener('mouseover', flashEffectDown);
document.getElementById('ageless').addEventListener('mouseleave', flashEffectUp);