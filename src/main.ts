import {
    handleMenuVisibility,
    handleShowCaseMenuTransition
} from './MenuOperations';
import {
    openMenuModal
} from './NavOperations';
import './style.css'




const hamburgerInit = document.querySelector('.hamburger-init') as HTMLInputElement;



const curtain = document.querySelector('.curtain') as HTMLDivElement;
const links: NodeListOf < HTMLAnchorElement > = document.querySelectorAll('a[href^="#"]:not(a[id="to-projects"])');

function handleImageToWorkTransition(e: Event) {
    const target = e.target as HTMLAnchorElement;
    curtain.animate({
        opacity: '1',
        zIndex: '48',
    }, {
        duration: 300,
        fill: 'forwards',
        easing: 'ease'
    })
    // const leftCue = document.querySelector('.left-cue') as HTMLDivElement;

    // console.log(target)
    if (target.parentElement) {
        target.parentElement.style.zIndex = '49';
        (document.querySelector('body') as HTMLBodyElement).style.overflow='hidden'
        // target.parentElement.style.position = 'fixed';
        // target.parentElement.animate({transform:'scale(3)', rotate:'0deg', top:'35%', left:'35%' }, {fill:'forwards', easing:'ease', duration:1200, delay:100})
        target.parentElement.animate({transform:'translate3d(30vw, -10vh, 1px)', width:'40vw',height:'25vw',  rotate:'0deg'}, {fill:'forwards', easing:'ease', duration:1200, delay:100})
    }

}


links.forEach((item) => {
    item.addEventListener('click', (e) => handleImageToWorkTransition(e), false);
});








hamburgerInit.onclick = () => openMenuModal();

window.addEventListener('scroll', handleMenuVisibility, true);

const menuValues = document.querySelectorAll('.showcase-item') as NodeListOf < HTMLLIElement > ;
menuValues.forEach((item) => {
    item.onclick = (e) => handleShowCaseMenuTransition(e);
})