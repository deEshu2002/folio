import { handleMouseOverRotation, handleMouseOutRotation } from './CSSEffects/CueMouseOver';
import { handleImageToWorkTransition } from './CSSEffects/CueToHintTransition';
import { handleTheme, themeToggle } from './Environment/themeOperations';
import {
  handleMenuSliderMouseEnterVisibility,
  handleMenuSliderMouseLeaveVisibility,
  handleMenuVisibility,
  handleShowCaseMenuTransition,
} from './MenuOperations';
import { openMenuModal, projectsButtonClickEvent } from './CSSEffects/CircularNavBar';

export const modeButton = document.getElementById('mode-toggle') as HTMLButtonElement;
handleTheme({ initFlag: true });

export const menuOptions = document.querySelector('.hamburger') as HTMLButtonElement;

const cues: NodeListOf<HTMLImageElement> = document.querySelectorAll(
  '#first-ref img ,#second-ref img, #third-ref img, #fourth-ref img',
);

const showcaseMenu = document.getElementById('showcase-menu') as HTMLUListElement;
const menuValues = document.querySelectorAll('.showcase-item') as NodeListOf<HTMLLIElement>;

const projectsButton = document.querySelector('.menu-item:last-child') as HTMLAnchorElement;

 const clipVideos = document.querySelectorAll("video") as NodeListOf<HTMLVideoElement> ;

export function resetJSStyles() {
  cues.forEach((elem) => {
    elem.removeAttribute('style');
  });
}

function playEvent(e:Event){
  (e.target as HTMLVideoElement).play();
}

function pauseEvent(e:Event){
   (e.target as HTMLVideoElement).pause();
}

function eventLoaders(resizeEvent?: boolean) {
  const smallerScreen = window.innerWidth > 220 && window.innerWidth < 723 ? true : false;
  if (!smallerScreen) {
    menuOptions.addEventListener('click', openMenuModal);
    cues.forEach((img) => {
      img.addEventListener('mouseup', handleImageToWorkTransition, { once: true });
      img.addEventListener('mouseenter', handleMouseOverRotation);
      img.addEventListener('mouseout', handleMouseOutRotation);
    });

    window.addEventListener('scroll', handleMenuVisibility, true);

    showcaseMenu.addEventListener('mouseenter', handleMenuSliderMouseEnterVisibility, false);
    showcaseMenu.addEventListener('mouseleave', handleMenuSliderMouseLeaveVisibility, false);

    projectsButton.addEventListener('click', projectsButtonClickEvent);

    menuValues.forEach((item) => {
      item.addEventListener('click', handleShowCaseMenuTransition);
    });

    
  } else if (resizeEvent) {
    menuOptions.removeEventListener('click', openMenuModal);
    cues.forEach((img) => {
      img.removeEventListener('mouseup', handleImageToWorkTransition);
      img.removeEventListener('mouseenter', handleMouseOverRotation);
      img.removeEventListener('mouseout', handleMouseOutRotation);
    });

    window.removeEventListener('scroll', handleMenuVisibility);

    showcaseMenu.removeEventListener('mouseenter', handleMenuSliderMouseEnterVisibility);
    showcaseMenu.removeEventListener('mouseleave', handleMenuSliderMouseLeaveVisibility);

    projectsButton.removeEventListener('click', projectsButtonClickEvent);

    menuValues.forEach((item) => {
      item.removeEventListener('click', handleShowCaseMenuTransition);
    });

  }
    modeButton.addEventListener('click', themeToggle);
    clipVideos.forEach((item) => {
        item.addEventListener('mouseover', playEvent);
        item.addEventListener('mouseout', pauseEvent);
    })

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
