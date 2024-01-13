import { eventLoader } from './EventLoader';
import { coordinates} from './types';
import { handleTheme } from './Environment/themeOperations';
import { cursorInit, updateCords } from './CSSEffects/CustomCursor';
import { updateShowCaseMiddle } from './MenuOperations';


// exporting elements that will not change on page translation
export function resetJSSetStyles(elems:HTMLCollectionOf<Element>) {
  [...elems].forEach((elem) => {
    elem.removeAttribute('style');
  });
}

export const dot = document.getElementById('dot');
export const header = document.getElementById('header');

export const modeButton = document.getElementById('mode-toggle') as HTMLButtonElement;

export const curtain = document.getElementById('curtain') as HTMLDivElement;
export const projHint = document.getElementById('thumbnail-location-ref') as HTMLImageElement;

// circular menu
export const ham = document.getElementById('hamburger') as HTMLButtonElement;
export const circularMenu = document.getElementById('circular-menu') as HTMLDivElement;
export const hiddenMenu = document.getElementById('hamburger-hidden-menu') as HTMLMenuElement;
export const connectButton = document.getElementById('Connect');
export const searchButton = document.getElementById('Search');
export const resourcesButton = document.getElementById('Resources');
export const projectsButton = document.getElementById('Projects') as HTMLAnchorElement;

export const cues = document.getElementsByClassName('ref-image') as HTMLCollectionOf<Element>;

export const circle = dot?.getElementsByTagName('circle').item(0);
export const text = dot?.getElementsByTagName('text').item(0);
export const contextFrames = document.getElementsByClassName('proj-link');

export const showcaseMenu = document.getElementById('showcase-menu') as HTMLMenuElement;
export const menuValues = document.getElementsByClassName('showcase-item') as HTMLCollectionOf<Element>;
export const showcaseContentItems = document.getElementsByClassName('showcase-content').item(0)?.children;

export const socialModal = document.getElementById('social-modal') as HTMLDivElement;
export const popUp = document.getElementById('popup') as HTMLDivElement;
export const popUpCloseButton = document.getElementById('popup-close');
export const main = document.getElementsByTagName('main').item(0) as HTMLElement;

function initPageTransition() {
  const hashValue = document.location.hash.substring(1);
  const targetTop = document.getElementById(hashValue)?.getBoundingClientRect().top;
  window.scrollTo({ top: targetTop });
}

window.addEventListener("load", () => {
  handleTheme({ initFlag: true });
  initPageTransition();
  eventLoader(false);
  eventLoader(true);
  cursorInit();
  updateShowCaseMiddle();
  const dateElem = document.getElementById('date');
  const currDate = new Date();

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = `${monthNames[currDate.getMonth()]} ${currDate.getDate()}, ${currDate.getFullYear()}`;
  dateElem?.append(date);
})

window.addEventListener('mousemove', (e) => {
  const newMouseCord:coordinates = {x: e.clientX, y: e.clientY};
  dot && updateCords(dot, newMouseCord, 62.5);
});

window.addEventListener("resize", () => {
  eventLoader(true);
});