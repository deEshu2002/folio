import { contextFrames, cues, ham, menuValues, modeButton, projectsButton, showcaseMenu } from "./main";
import {
  handleMenuSliderMouseEnterVisibility,
  handleMenuSliderMouseLeaveVisibility,
  handleMenuVisibility,
  handleShowCaseMenuTransition,
} from './MenuOperations';
import { handleHamMenuModal, projectsButtonClickEvent } from './CSSEffects/CircularNavBar';
import { handleMouseOverRotation, handleMouseOutRotation } from './CSSEffects/CueMouseOver';
import { handleImageToWorkTransition } from './CSSEffects/CueToHintTransition';
import { mouseLeaveFromPreviewImage, mouseEnterOverPreviewImage } from "./CSSEffects/CustomCursor";
import { themeToggle } from "./Environment/themeOperations";

export function eventLoader(resizeEvent?: boolean) {
  const smallerScreen = window.innerWidth > 220 && window.innerWidth < 723 ? true : false;

  // if (!smallerScreen) {
    ham.addEventListener('click', handleHamMenuModal);

    [...cues].forEach((img) => {
      img.addEventListener('mouseup', handleImageToWorkTransition, { once: true });
      img.addEventListener('mouseenter', handleMouseOverRotation);
      img.addEventListener('mouseout', handleMouseOutRotation);
    });

    window.addEventListener('scroll', handleMenuVisibility, true);

    showcaseMenu.addEventListener('mouseenter', handleMenuSliderMouseEnterVisibility, false);
    showcaseMenu.addEventListener('mouseleave', handleMenuSliderMouseLeaveVisibility, false);

    projectsButton.addEventListener('click', projectsButtonClickEvent);

    [...menuValues].forEach((item) => {
      item.addEventListener('click', handleShowCaseMenuTransition);
    });

    [...contextFrames].forEach((elem) => {
      elem.addEventListener("mouseleave", (e) => {
        mouseLeaveFromPreviewImage(elem);
      })
    });

    [...contextFrames].forEach((elem) => {
        elem.addEventListener("mouseenter", (e) =>{
          mouseEnterOverPreviewImage(elem);
        })
    });
  // }
  
  if (resizeEvent) {
    ham.removeEventListener('click', handleHamMenuModal);
    [...cues].forEach((img) => {
      img.removeEventListener('mouseup', handleImageToWorkTransition);
      img.removeEventListener('mouseenter', handleMouseOverRotation);
      img.removeEventListener('mouseout', handleMouseOutRotation);
    });

    window.removeEventListener('scroll', handleMenuVisibility);

    showcaseMenu.removeEventListener('mouseenter', handleMenuSliderMouseEnterVisibility);
    showcaseMenu.removeEventListener('mouseleave', handleMenuSliderMouseLeaveVisibility);

    projectsButton.removeEventListener('click', projectsButtonClickEvent);

    [...menuValues].forEach((item) => {
      item.removeEventListener('click', handleShowCaseMenuTransition);
    });

  }
    modeButton.addEventListener('click', themeToggle);

}