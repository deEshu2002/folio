import { handleMenuVisibility, handleShowCaseMenuTransition } from './MenuOperations';
import { openMenuModal } from './NavOperations';
import './style.css'




const hamburgerInit = document.querySelector('.hamburger-init') as HTMLInputElement;



const curtain = document.querySelector('.curtain') as HTMLDivElement;
const images:NodeListOf<HTMLImageElement> = document.querySelectorAll('#description div[class$="cue"] a img');

function handleImageToWorkTransition(e:Event){
    const target = e.target as HTMLImageElement;
    curtain.animate({opacity:'1', zIndex:'1',}, {duration:300, fill:'forwards', easing:'ease'})
    const leftCue = document.querySelector('.left-cue') as HTMLDivElement;
    leftCue.style.zIndex = '21';
    target.animate({tranform:'translate3d(120, 120, 1)'})
    
}

images.forEach((item) => {
    item.addEventListener('click', (e) => handleImageToWorkTransition(e), false);
});








hamburgerInit.onclick = () => openMenuModal();

window.addEventListener('scroll', handleMenuVisibility, true);

let menuValues = document.querySelectorAll('.showcase-item') as NodeListOf<HTMLLIElement>;
menuValues.forEach((item) => {
    item.onclick = (e) => handleShowCaseMenuTransition(e);
})