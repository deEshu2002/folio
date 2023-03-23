import './style.css'


//increase navbar z-index instead of cast



const hamburgerInit = document.querySelector('.hamburger-init') as HTMLInputElement;
function makeHamburgerActive(){
    (document.querySelector('.circular-menu') as HTMLDivElement).classList.toggle('active'); 
}
hamburgerInit.onclick = () => makeHamburgerActive();


const curtain = document.querySelector('.curtain') as HTMLDivElement;
const images:NodeListOf<HTMLImageElement> = document.querySelectorAll('#description div[class$="cue"] a img');

function handleImageToWorkTransition(e:Event){
    const target = e.target as HTMLImageElement;
    curtain.animate({opacity:'1', zIndex:'4',}, {duration:300, fill:'forwards', easing:'ease'})
    
}

images.forEach((item) => {
    item.addEventListener('click', (e) => handleImageToWorkTransition(e), false);
});






const menu = document.getElementById("showcase-menu") as HTMLUListElement;
// const menuMiddleElement = document.getElementById('showcase-menu-middle') as HTMLLIElement;
let menuValues = document.querySelectorAll('.showcase-item') as NodeListOf<HTMLLIElement>;

function handleMenuVisibility(){
    const stickyTopValue = window.innerHeight/8;

    if(menu.getBoundingClientRect().top <=  stickyTopValue + 80){
        menu.animate({opacity: 1, zIndex:9}, { duration:600, fill:'forwards', easing:'cubic-bezier(0.25, 1, 0.5, 1)'})
    }else{
        menu.animate({opacity: 0, zIndex:-1}, { duration:600, fill:'forwards', easing:'cubic-bezier(0.25, 1, 0.5, 1)'})
    }
    
}
window.addEventListener('scroll', handleMenuVisibility, true);

function handleShowCaseMenuTransition(e:Event){
    e.preventDefault();
    (document.querySelector('.showcase-item.showcase-menu-middle') as HTMLLIElement).classList.remove('showcase-menu-middle');
    (e.target as HTMLLIElement).classList.add('showcase-menu-middle');
}

menuValues.forEach((item) => {
    item.onclick = (e) => handleShowCaseMenuTransition(e);
})