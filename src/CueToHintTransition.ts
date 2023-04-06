import { handleMouseOutRotation, handleMouseOverRotation } from './CueMouseOver';
import { initialUserPrefferedState } from './themeOperations';
import { reducedMotion } from './reducedmotion';
import { darkThemeMap, lightThemeMap } from './jsThemesData';

export function handleImageToWorkTransition(e: Event) {
  if (window.scrollY > 0 || reducedMotion) {
    return;
  }
  const curtain = document.querySelector('.curtain') as HTMLDivElement;
  const projHint = document.querySelector('#first .proj-hint') as HTMLImageElement;
  const nav = document.querySelector('nav');

  const projHintPosition = projHint.getBoundingClientRect();
  const targetleftPosition = projHintPosition.left;
  const targetRightPosition = projHintPosition.right;
  const targetHeight = projHintPosition.height;
  const targetWidth = projHintPosition.width;

  curtain.style.opacity = '1';
  curtain.style.zIndex = '48';

  const eventInitiator = e.target as HTMLImageElement;

  const parent = eventInitiator.parentElement as HTMLAnchorElement;

  const currPosition = parent.getBoundingClientRect();
  const currLeftPosition = currPosition.left;
  const currRightPosition = currPosition.right;
  const currBottomPosition = currPosition.bottom;
  const currTopPosition = currPosition.top;

  let XAxisChangeGap = 0;
  let YAxisChangeGap = 0;

  const navHeight = nav?.getBoundingClientRect().height ?? 0;
  const idealBottom = navHeight + targetHeight;

  if (parent.id === 'first-ref' || parent.id === 'second-ref') {
    XAxisChangeGap = targetleftPosition - currLeftPosition;
    YAxisChangeGap = idealBottom - currBottomPosition + 2; // 2px differenece in calculation
  } else if (parent.id === 'third-ref' || parent.id === 'fourth-ref') {
    XAxisChangeGap = targetRightPosition - currRightPosition;
    YAxisChangeGap = navHeight - currTopPosition + 2;
  }

  parent.style.zIndex = '49';
  parent.style.pointerEvents = 'none';
  parent.style.position = 'fixed';
  const projHintShadows =
    initialUserPrefferedState === 'light'
      ? lightThemeMap.get('--hint-img-shadow')
      : darkThemeMap.get('--hint-img-shadow');

  eventInitiator.style.padding = '0';
  eventInitiator.animate(
    {
      transform: `translate3d( ${XAxisChangeGap}px, ${YAxisChangeGap}px,1px)`,
      borderRadius: '2rem',
      boxShadow: projHintShadows,
      width: `${targetWidth}px`,
      height: `${targetHeight}px`,
      rotate: '0deg',
    },
    {
      fill: 'forwards',
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      duration: 1200,
    },
  );

  setTimeout(() => curtain.removeAttribute('style'), 1200);

  parent.animate(
    {
      opacity: 0,
    },
    {
      fill: 'forwards',
      easing: 'ease',
      duration: 600,
      delay: 1500,
    },
  );

  setTimeout(() => {
    parent.removeAttribute('style');
    parent.classList.add('stop-rotation'); // so that classlist size will increase and it will not be liable to rotate further on mouseover;
  }, 1600);

  eventInitiator.removeEventListener('mouseenter', handleMouseOverRotation);
  eventInitiator.removeEventListener('mouseout', handleMouseOutRotation);
}
