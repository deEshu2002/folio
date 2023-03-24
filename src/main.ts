import { handleMenuVisibility, handleShowCaseMenuTransition } from './MenuOperations';
import { openMenuModal } from './NavOperations';
import './style.css'




const hamburgerInit = document.querySelector('.hamburger-init') as HTMLInputElement;



const curtain = document.querySelector('.curtain') as HTMLDivElement;
const links:NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href^="#"]:not(a[id="to-projects"])');

function handleImageToWorkTransition(e:Event){
    const target = e.target as HTMLAnchorElement;
    curtain.animate({opacity:'1', zIndex:'90',}, {duration:300, fill:'forwards', easing:'ease'})
    // const leftCue = document.querySelector('.left-cue') as HTMLDivElement;
    
    console.log(target)
    if(target.parentElement)target.parentElement.style.zIndex = '101';
    target.animate({tranform:'translate3d(120, 120, 100)'})
    
}


links.forEach((item) => {
    item.addEventListener('click', (e) => handleImageToWorkTransition(e), false);
});








hamburgerInit.onclick = () => openMenuModal();

window.addEventListener('scroll', handleMenuVisibility, true);

let menuValues = document.querySelectorAll('.showcase-item') as NodeListOf<HTMLLIElement>;
menuValues.forEach((item) => {
    item.onclick = (e) => handleShowCaseMenuTransition(e);
})