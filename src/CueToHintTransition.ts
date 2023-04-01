import { darkThemeMap, initialUserPrefferedState, lightThemeMap } from './handleTheme';
import { reducedMotion } from './reducedmotion';

export function handleImageToWorkTransition(e: Event) {
  const curtain = document.querySelector('.curtain') as HTMLDivElement;
  const projHint = document.querySelector('#first .proj-hint') as HTMLImageElement;
  const nav = document.querySelector('nav');
  
  // Can't figure out how to position 3d transition Y axis values;

  if (window.scrollY > 0 || reducedMotion) {
    return;
  }

  const projHintPosition = projHint.getBoundingClientRect();
  const targetleftPosition = projHintPosition.left;
  const targetRightPosition = projHintPosition.right;
  const targetHeight = projHintPosition.height;

  curtain.animate(
    {
      opacity: '1',
      zIndex: '48',
    },
    {
      duration: 300,
      fill: 'forwards',
      easing: 'ease',
    },
  );

  const curr = e.target as HTMLImageElement;

  const parent = (e.target as HTMLImageElement).parentElement as HTMLAnchorElement;

  const currPosition = parent.getBoundingClientRect();
  const currLeftPosition = currPosition.left;
  const currRightPosition = currPosition.right;
  const currBottomPosition = currPosition.bottom;
  const currTopPosition = currPosition.top;

  let XAxisChangeGap = 0;
  let YAxisChangeGap = 0;

  const navHeight = (nav?.getBoundingClientRect().height ?? 0 )
  const idealBottom = navHeight + targetHeight;

  if (parent.id === 'first-ref' || parent.id === 'second-ref') {
    XAxisChangeGap = targetleftPosition - currLeftPosition;
    YAxisChangeGap = idealBottom - currBottomPosition + 2; // 2px differenece in calculation
  } else if (parent.id === 'third-ref' || parent.id === 'fourth-ref') {
    XAxisChangeGap = targetRightPosition - currRightPosition;
    YAxisChangeGap = navHeight - currTopPosition + 2;
  }

  parent.classList.add('stop-rotation'); // so that classlist size will increase and it will not be liable to rotate further on mouseover;

  parent.style.zIndex = '49';
  parent.style.pointerEvents = 'none';
  parent.style.position = 'fixed';
  // const projHintShadows = getThemeBasedColorOf('#first .proj-hint', 'box-shadow');
  const projHintShadows = initialUserPrefferedState === 'light' ? lightThemeMap.get('--hint-img-shadow'):darkThemeMap.get('--hint-img-shadow') ;

  curr.animate(
    {
      transform: `translate3d( ${XAxisChangeGap}px, ${YAxisChangeGap}px,1px)`,
      borderRadius: '2rem',
      padding: 0,
      boxShadow: projHintShadows,
      width: '40rem',
      height: '25rem',
      rotate: '0deg',
    },
    {
      fill: 'forwards',
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      duration: 1200,
    },
  );

  setTimeout(() => {
    curtain.animate(
      {
        opacity: 0,
        zIndex: -48,
      },
      {
        duration: 600,
        fill: 'forwards',
        easing: 'ease',
      },
    );

    parent.animate(
      {
        opacity: 0,
      },
      {
        fill: 'forwards',
        easing: 'ease',
        duration: 600,
        delay: 300,
      },
    );
  }, 1200);
}
