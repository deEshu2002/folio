import { circularMenu, connectButton, ham, hiddenMenu, searchButton } from '../main';
import { handleSocialLinksModal } from './SocialLinksPopup';

function closeMenuModal(){
  circularMenu.classList.remove('active');
  (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto';
  ham.setAttribute('title', 'Show menu options');
  ham.setAttribute('aria-label', 'show menu options');

  connectButton?.removeEventListener('click', handleSocialLinksModal);
  searchButton?.removeEventListener('click', handleSocialLinksModal);
  
  setTimeout(() => hiddenMenu.toggleAttribute('hidden'), 10);
}

function openMenuModal() {
  circularMenu.classList.add('active');
  (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
  ham.setAttribute('title', 'Hide menu options');
  ham.setAttribute('aria-label', 'hide menu options');

  connectButton?.addEventListener('click', handleSocialLinksModal);
  searchButton?.addEventListener('click', handleSocialLinksModal);

  setTimeout(() => hiddenMenu.toggleAttribute('hidden'), 225);
}

export function handleHamMenuModal(){
  if(circularMenu.classList.contains('active')){
    closeMenuModal();
  }else{
    openMenuModal();
  }
}

export function projectsButtonClickEvent() {
  ham.click();
}
