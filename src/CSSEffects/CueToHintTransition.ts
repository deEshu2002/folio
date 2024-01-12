import { handleMouseOutRotation, handleMouseOverRotation } from './CueMouseOver';
import { initialUserPrefferedState } from '../Environment/themeOperations';
import { reducedMotion } from '../Environment/reducedmotion';
import { darkThemeMap, lightThemeMap } from '../Database/jsThemesData';
import { curtain, header, projHint } from '../main';

export function handleImageToWorkTransition(e: Event) {
  if (window.scrollY > 0 || reducedMotion) {
    return;
  }

  const projHintPosition = projHint.getBoundingClientRect();
  const targetleftPosition = projHintPosition.left;
  const targetRightPosition = projHintPosition.right;
  const targetHeight = projHintPosition.height;
  const targetWidth = projHintPosition.width;

  curtain.toggleAttribute('hidden');
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

  const navHeight = header?.getBoundingClientRect().height ?? 0;
  const idealBottom = navHeight + targetHeight;

  if (parent.id === 'first-ref' || parent.id === 'second-ref') {
    XAxisChangeGap = targetleftPosition - currLeftPosition;
    YAxisChangeGap = idealBottom - currBottomPosition;
  } else if (parent.id === 'third-ref' || parent.id === 'fourth-ref') {
    XAxisChangeGap = targetRightPosition - currRightPosition;
    YAxisChangeGap = navHeight - currTopPosition;
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

  setTimeout(() => {
    curtain.removeAttribute('style');
    curtain.toggleAttribute('hidden');
  }, 1200);

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
    parent.classList.add('hidden'); // so that classlist size will increase and it will not be liable to rotate further on mouseover;
  }, 1600);

  eventInitiator.removeEventListener('mouseenter', handleMouseOverRotation);
  eventInitiator.removeEventListener('mouseout', handleMouseOutRotation);
}
