import { header } from "./main";

const menu = document.getElementById('showcase-menu') as HTMLUListElement;

export let isMenuVisible = false;
export function handleMenuVisibility() {
  const stickyTopValue = window.innerHeight / 8;

  if (menu.getBoundingClientRect().top <= stickyTopValue + 80) {
    if (isMenuVisible) return;
    menu.animate(
      { opacity: 1, zIndex: 9 },
      { duration: 600, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' },
    );
    isMenuVisible = true;
    if(header){
      header.style.backgroundColor = 'var(--background-color)';
    }
  } else {
    isMenuVisible = false;
    if(header){
      header.removeAttribute('style');
    }
    menu.animate(
      { opacity: 0, zIndex: -1 },
      { duration: 600, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' },
    );
  }
}

export function handleShowCaseMenuTransition(e: Event) {
  (document.getElementsByClassName('showcase-menu-middle').item(0) as HTMLLIElement).classList.remove(
    'showcase-menu-middle',
  );
  (e.target as HTMLLIElement).classList.add('showcase-menu-middle');
  setTimeout(() => {
    (e.target as HTMLLIElement).classList.remove('active');
  }, 10);
}

export function handleMenuSliderMouseEnterVisibility() {
  (document.getElementsByClassName('showcase-menu-middle').item(0) as HTMLLIElement).classList.add('active');
}

export function handleMenuSliderMouseLeaveVisibility() {
  (document.getElementsByClassName('showcase-menu-middle').item(0) as HTMLLIElement).classList.remove('active');
}
