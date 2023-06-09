const menu = document.getElementById('showcase-menu') as HTMLUListElement;

let isMenuVisible = false;
export function handleMenuVisibility() {
  const stickyTopValue = window.innerHeight / 8;

  if (menu.getBoundingClientRect().top <= stickyTopValue + 80) {
    if (isMenuVisible) return;
    menu.animate(
      { opacity: 1, zIndex: 9 },
      { duration: 600, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' },
    );
    isMenuVisible = true;
  } else {
    isMenuVisible = false;
    menu.animate(
      { opacity: 0, zIndex: -1 },
      { duration: 600, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' },
    );
  }
}

export function handleShowCaseMenuTransition(e: Event) {
  (document.querySelector('.showcase-item.showcase-menu-middle') as HTMLLIElement).classList.remove(
    'showcase-menu-middle',
  );
  (e.target as HTMLLIElement).classList.add('showcase-menu-middle');
  setTimeout(() => {
    (e.target as HTMLLIElement).classList.remove('active');
  }, 10);
}

export function handleMenuSliderMouseEnterVisibility() {
  (document.querySelector('.showcase-item.showcase-menu-middle') as HTMLLIElement).classList.add('active');
}

export function handleMenuSliderMouseLeaveVisibility() {
  (document.querySelector('.showcase-item.showcase-menu-middle') as HTMLLIElement).classList.remove('active');
}
