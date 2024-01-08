import { menuOptions } from '../main';

export function openMenuModal(e: Event) {
  const target = document.querySelector('.circular-menu') as HTMLDivElement;
  const currTarget = e.currentTarget as HTMLButtonElement;
  const menu = target.lastElementChild as HTMLMenuElement;
  if (target.classList.contains('active')) {
    target.classList.remove('active');
    (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto';
    currTarget.setAttribute('title', 'Show menu options');
    currTarget.setAttribute('aria-label', 'show menu options');
    setTimeout(() => menu.toggleAttribute('hidden'), 10);
  } else {
    target.classList.add('active');
    (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
    currTarget.setAttribute('title', 'Hide menu options');
    currTarget.setAttribute('aria-label', 'hide menu options');
    setTimeout(() => menu.toggleAttribute('hidden'), 225);
  }
}

export function projectsButtonClickEvent() {
  menuOptions.click();
}
