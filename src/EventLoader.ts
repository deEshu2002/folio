import { contextFrames, cues, ham, header, menuValues, modeButton, projectsButton, showcaseMenu} from "./main";
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

export function eventLoader(resizeEvent:boolean) {
  if(!resizeEvent){
    ham.addEventListener('click', handleHamMenuModal);
    modeButton.addEventListener('click', themeToggle);
    projectsButton.addEventListener('click', projectsButtonClickEvent);

    [...contextFrames].forEach((elem) => {
        elem.addEventListener("mouseleave", () => {
          mouseLeaveFromPreviewImage(elem);
        })
      });

    [...contextFrames].forEach((elem) => {
        elem.addEventListener("mouseenter", () =>{
          mouseEnterOverPreviewImage(elem);
        })
    });
  }else{
    const isSmallScreen = window.innerWidth > 220 && window.innerWidth < 723 ? true : false;
    if(isSmallScreen){
      if(header) header.style.backgroundColor = 'var(--background-color)';
      return;
    }
    // reached | notReached smallScreen
    if(isSmallScreen){
      console.log('hello');
      [...cues].forEach((img) => {
        img.removeEventListener('mouseup', handleImageToWorkTransition);
        img.removeEventListener('mouseenter', handleMouseOverRotation);
        img.removeEventListener('mouseout', handleMouseOutRotation);
      });

      window.removeEventListener('scroll', handleMenuVisibility); 

      showcaseMenu.removeEventListener('mouseenter', handleMenuSliderMouseEnterVisibility);
      showcaseMenu.removeEventListener('mouseleave', handleMenuSliderMouseLeaveVisibility);


      [...menuValues].forEach((item) => {
        item.removeEventListener('click', handleShowCaseMenuTransition);
      });
    }else{
      header && header.removeAttribute('style');
      [...cues].forEach((img) => {
          img.addEventListener('mouseup', handleImageToWorkTransition, { once: true });
          img.addEventListener('mouseenter', handleMouseOverRotation);
          img.addEventListener('mouseout', handleMouseOutRotation);
        });

        window.addEventListener('scroll', handleMenuVisibility, true);

        showcaseMenu.addEventListener('mouseenter', handleMenuSliderMouseEnterVisibility, false);
        showcaseMenu.addEventListener('mouseleave', handleMenuSliderMouseLeaveVisibility, false);


        [...menuValues].forEach((item) => {
          item.addEventListener('click', handleShowCaseMenuTransition);
        });
    }
  }
}