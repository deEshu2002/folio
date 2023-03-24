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
const cues: NodeListOf<HTMLImageElement> = document.querySelectorAll('img.positive-rotation, img.negative-rotation');

// function xAxisDifference(initialElement:HTMLAnchorElement){
//     return targetLeft-left;
// }
function yAxisDifference(initialElement: HTMLAnchorElement){
    // const top = initialElement.getBoundingClientRect().top;
    // const targetTop = (document.querySelector('#first .proj-hint') as HTMLImageElement).getBoundingClientRect().top;

    // console.log(top, targetTop);
    // return targetTop - top;
}

function handleImageToWorkTransition(e: Event) {
    const target = e.target as HTMLImageElement;

    const leftGap =  (document.querySelector('.proj-hint') as HTMLImageElement).getBoundingClientRect().left - (target).getBoundingClientRect().left;
    console.log(leftGap)

    curtain.animate({
        opacity: '1',
        zIndex: '4',
    }, {
        duration: 300,
        fill: 'forwards',
        easing: 'ease'
    })
    target.classList.add('stop-rotation'); // so that classlist size will increase and it will not be liable to rotate further on mouseover;

    if ( target.parentElement) {
        target.parentElement.style.zIndex = '49';
        // (document.querySelector('body') as HTMLBodyElement).style.overflow='hidden'
        target.parentElement.style.pointerEvents = 'none';
        target.parentElement.style.position = 'fixed';
    }

    target.animate({
        padding: '0',
        transform: `translate3d(${leftGap}px, -51%,1px)`,
        width: '40rem', height: '25rem',
        rotate: '0deg',
        borderRadius: '2rem',
        boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.25)'},
        { fill: 'forwards', easing: 'ease', duration: 1200, delay: 100 })

}


function handleMouseOutRotation(e:Event){
   const target = (e.target as HTMLImageElement);
   if(target.classList.length === 1){
       if(target.classList[0] ==='positive-rotation'){
           target.style.rotate= '9deg';
        }else {
            target.style.rotate = '-9deg';
        }
    }
}

function handleMouseOverRotation(e:Event){
    const victim = (e.target as HTMLImageElement);
    victim.style.rotate = '0deg';
}


cues.forEach((img) => {
    img.addEventListener('click', (e) => handleImageToWorkTransition(e), false);
    img.addEventListener('mouseover', (e) => handleMouseOverRotation(e) , false);
    img.addEventListener('mouseout',(e) => { handleMouseOutRotation(e) })
});








hamburgerInit.onclick = () => openMenuModal();

window.addEventListener('scroll', handleMenuVisibility, true);

const menuValues = document.querySelectorAll('.showcase-item') as NodeListOf<HTMLLIElement>;
menuValues.forEach((item) => {
    item.onclick = (e) => handleShowCaseMenuTransition(e);
})