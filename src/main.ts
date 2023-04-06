import { handleMouseOverRotation, handleMouseOutRotation } from './CueMouseOver';
import { handleImageToWorkTransition } from './CueToHintTransition';
import { handleTheme, themeToggle } from './themeOperations';
import {
  handleMenuSliderMouseEnterVisibility,
  handleMenuSliderMouseLeaveVisibility,
  handleMenuVisibility,
  handleShowCaseMenuTransition,
} from './MenuOperations';
import { openMenuModal, projectsButtonClickEvent } from './NavOperations';

export const modeButton = document.getElementById('mode-toggle') as HTMLButtonElement;
handleTheme({ initFlag: true });

export const hamburgerInit = document.querySelector('.hamburger-init') as HTMLInputElement;

const cues: NodeListOf<HTMLImageElement> = document.querySelectorAll(
  '#first-ref img ,#second-ref img, #third-ref img, #fourth-ref img',
);

const showcaseMenu = document.getElementById('showcase-menu') as HTMLUListElement;
const menuValues = document.querySelectorAll('.showcase-item') as NodeListOf<HTMLLIElement>;

const projectsButton = document.querySelector('.menu-item:last-child') as HTMLAnchorElement;

export function resetJSStyles() {
  cues.forEach((elem) => {
    elem.removeAttribute('style');
  });
}

function eventLoaders(resizeEvent?: boolean) {
  const smallerScreen = window.innerWidth > 220 && window.innerWidth < 723 ? true : false;
  if (!smallerScreen) {
    hamburgerInit.addEventListener('click', openMenuModal);
    cues.forEach((img) => {
      img.addEventListener('mouseup', handleImageToWorkTransition, { once: true });
      img.addEventListener('mouseenter', handleMouseOverRotation);
      img.addEventListener('mouseout', handleMouseOutRotation);
    });

    window.addEventListener('scroll', handleMenuVisibility, true);

    showcaseMenu.addEventListener('mouseenter', handleMenuSliderMouseEnterVisibility, false);
    showcaseMenu.addEventListener('mouseleave', handleMenuSliderMouseLeaveVisibility, false);

    projectsButton.addEventListener('click', projectsButtonClickEvent);

    modeButton.addEventListener('click', themeToggle);
    menuValues.forEach((item) => {
      item.addEventListener('click', handleShowCaseMenuTransition);
    });
  } else if (resizeEvent) {
    hamburgerInit.removeEventListener('click', openMenuModal);
    cues.forEach((img) => {
      img.removeEventListener('mouseup', handleImageToWorkTransition);
      img.removeEventListener('mouseenter', handleMouseOverRotation);
      img.removeEventListener('mouseout', handleMouseOutRotation);
    });

    window.removeEventListener('scroll', handleMenuVisibility);

    showcaseMenu.removeEventListener('mouseenter', handleMenuSliderMouseEnterVisibility);
    showcaseMenu.removeEventListener('mouseleave', handleMenuSliderMouseLeaveVisibility);

    projectsButton.removeEventListener('click', projectsButtonClickEvent);

    modeButton.removeEventListener('click', themeToggle);
    menuValues.forEach((item) => {
      item.removeEventListener('click', handleShowCaseMenuTransition);
    });
  }
}

function initPageTransition() {
  const hashValue = document.location.hash.substring(1);
  const targetTop = document.getElementById(hashValue)?.getBoundingClientRect().top;
  window.scrollTo({ top: targetTop });
}

eventLoaders();

window.onresize = () => {
  eventLoaders(true);
};

window.onload = initPageTransition;
