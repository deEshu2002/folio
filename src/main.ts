import {
    handleMouseOverRotation,
    handleMouseOutRotation
} from './CueMouseOver';
import { handleImageToWorkTransition } from './CueToHintTransition';
import {
    handleMenuVisibility,
    handleShowCaseMenuTransition
} from './MenuOperations';
import {
    openMenuModal
} from './NavOperations';
import './style.css'




const hamburgerInit = document.querySelector('.hamburger-init') as HTMLInputElement;



const cues: NodeListOf < HTMLImageElement > = document.querySelectorAll('img.positive-rotation, img.negative-rotation');


hamburgerInit.onclick = () => openMenuModal();

cues.forEach((img) => {
    img.addEventListener('click', (e) => handleImageToWorkTransition(e), false);
    img.addEventListener('mouseover', (e) => handleMouseOverRotation(e), false);
    img.addEventListener('mouseout', (e) => handleMouseOutRotation(e), false)
});

window.addEventListener('scroll', handleMenuVisibility, true);

const menuValues = document.querySelectorAll('.showcase-item') as NodeListOf < HTMLLIElement > ;
menuValues.forEach((item) => {
    item.onclick = (e) => handleShowCaseMenuTransition(e);
})