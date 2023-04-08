import { modeButton } from './main';

export function openMenuModal() {
  const target = document.querySelector('.circular-menu') as HTMLDivElement;
  if (target.classList.contains('active')) {
    target.classList.remove('active');
    (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto';
  } else {
    target.classList.add('active');
    (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
  }
}

export function projectsButtonClickEvent() {
  modeButton.click();
}
