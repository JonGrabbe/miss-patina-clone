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
    let currentImageSrc = elm.getElementsByClassName('grid-item-img')[0].getAttribute('src')
    console.log(currentImageSrc)
    if(currentImageSrc === 'dress1.jpg') {
        elm.innerHTML = '<img src="images/purse1.jpg" class="grid-item-img"/>';
    } else {
        elm.innerHTML = '<img src="images/dress1.jpg" class="grid-item-img"/>';
    }
}
for(let i=0; i<=gridItems.length; i++) {
    document.getElementsByClassName('grid-item')[i].addEventListener('click', imageRollOver);
}