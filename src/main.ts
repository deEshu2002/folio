import { handleMouseOverRotation, handleMouseOutRotation } from './CueMouseOver';
import { handleImageToWorkTransition } from './CueToHintTransition';
import { handleTheme, setSavedColorPreferenece, toggleColorPreferenceState } from './handleTheme';
import {
  handleMenuSliderMouseEnterVisibility,
  handleMenuSliderMouseLeaveVisibility,
  handleMenuVisibility,
  handleShowCaseMenuTransition,
} from './MenuOperations';
import { openMenuModal } from './NavOperations';
import './style.css';
// import { appendModeToggleButton, sunMoonTransition } from './sunMoonTransition';

const hamburgerInit = document.querySelector('.hamburger-init') as HTMLInputElement;

export const cues: NodeListOf<HTMLImageElement> = document.querySelectorAll(
  '#first-ref img ,#second-ref img, #third-ref img, #fourth-ref img',
);

hamburgerInit.onclick = () => openMenuModal();

cues.forEach((img) => {
  //don't forget to remove event listeners at end of transition
  img.addEventListener('mouseup', (e) => handleImageToWorkTransition(e), false);
  img.addEventListener('mouseenter', (e) => handleMouseOverRotation(e), false);
  img.addEventListener('mouseout', (e) => handleMouseOutRotation(e), false);
});

window.addEventListener('scroll', handleMenuVisibility, true);

const menuValues = document.querySelectorAll('.showcase-item') as NodeListOf<HTMLLIElement>;
menuValues.forEach((item) => {
  item.onclick = (e) => handleShowCaseMenuTransition(e);
});

// toggleButton.onmouseup = (e) => sunMoonTransition();
window.onload = () => handleTheme({ initFlag: true });

export const modeButton = document.getElementById('mode-toggle') as HTMLButtonElement;

export function resetJSStyles() {
  cues.forEach((elem) => {
    elem.removeAttribute('style');
  });
}

modeButton.onclick = () => {
  toggleColorPreferenceState();
  setTimeout(() => setSavedColorPreferenece(), 100);
  handleTheme({ initFlag: false });

  resetJSStyles();
};

(document.querySelector('.menu-item:last-child') as HTMLAnchorElement).onclick = () => {
  hamburgerInit.click();
};

const showcaseMenu = document.getElementById('showcase-menu') as HTMLUListElement;

showcaseMenu.addEventListener('mouseenter', handleMenuSliderMouseEnterVisibility, false);
showcaseMenu.addEventListener('mouseleave', handleMenuSliderMouseLeaveVisibility, false);
