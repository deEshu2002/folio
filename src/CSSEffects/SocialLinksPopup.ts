import { popUp, socialModal, popUpCloseButton, main } from "../main";
import { projectsButtonClickEvent } from "./CircularNavBar";

function showSocialLinks(){
    const height = ((window.innerWidth > window.innerHeight ? 52: 56 )*(window.screen.height))/100;
    socialModal.classList.remove('hidden');
    (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
    popUp.animate({
      height: `${height}px`,
      borderWidth: '1px 1px 10px 1px',
    },{ duration: 300,
      easing: 'ease-in-out',
      fill:'forwards'});

    [...popUp.children].forEach(elem => {
      elem.animate({opacity:1},{duration: 100, fill:'forwards', delay: 300});
    })
    popUpCloseButton?.focus();
    main.setAttribute("aria-hidden","true");
    socialModal.setAttribute('aria-hidden', 'false');
    
    popUpCloseButton?.addEventListener('click', hideSocialLinks);
}

function hideSocialLinks(){
    [...popUp.children].forEach(elem => {
      elem.animate({opacity:0},{fill:'forwards'});
    })
    popUp.animate({
      height: 0,
      borderWidth: '1px',
    },{ duration: 300,
      easing: 'ease-in-out',
      fill:'forwards'});
   
    setTimeout(() => {
       socialModal.classList.add('hidden');
       (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto';
        main.setAttribute("aria-hidden","false");
        socialModal.setAttribute('aria-hidden', 'true');
    }, 350);
    popUpCloseButton?.removeEventListener('click', hideSocialLinks);
}

export function handleSocialLinksModal(){
    if(socialModal.classList.contains('hidden')){
        projectsButtonClickEvent();
        setTimeout(showSocialLinks, 100);
    }else{
        setTimeout(hideSocialLinks, 100);
    }
}