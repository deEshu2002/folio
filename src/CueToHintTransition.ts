const curtain = document.querySelector('.curtain') as HTMLDivElement;
const target = document.querySelector('.showcase-content article .proj-hint') as HTMLImageElement;
const nav = document.querySelector('nav');

export function handleImageToWorkTransition(e: Event) {
  //can't figure out how to position 3d transition Y axis values;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (window.scrollY > 0 || reducedMotion) {
    return;
  }

  const targetPositions = target.getBoundingClientRect();
  const targetleftPosition = targetPositions.left;
  const targetRightPosition = targetPositions.right;
  const targetHeight = targetPositions.height;

  const initiator = e.target as HTMLImageElement;

  curtain.animate({
    opacity: '1',
    zIndex: '48',
  }, {
    duration: 300,
    fill: 'forwards',
    easing: 'ease',
  }, );

  const parent = (e.target as HTMLImageElement).parentElement as HTMLAnchorElement;
  const parentPositions = parent.getBoundingClientRect();
  const currLeftPosition = parentPositions.left;
  const currRightPosition = parentPositions.right;
  const currBottomPosition = parentPositions.bottom;
  const currTopPosition = parentPositions.top;

  let XAxisChangeGap = 0;
  let YAxisChangeGap = 0;

  const navHeight = nav?.getBoundingClientRect().height ?? 0;
  const idealBottom = navHeight + targetHeight;

  if (parent.getAttribute('href') === '#first' || parent.getAttribute('href') === '#second') {
    XAxisChangeGap = targetleftPosition - currLeftPosition;
    YAxisChangeGap = idealBottom - currBottomPosition;
  } else if (parent.getAttribute('href') === '#third' || parent.getAttribute('href') === '#fourth') {
    XAxisChangeGap = targetRightPosition - currRightPosition;
    YAxisChangeGap = navHeight - currTopPosition;
  }

  initiator.classList.add('stop-rotation'); // so that classlist size will increase and it will not be liable to rotate further on mouseover;

  parent.style.zIndex = '49';
  parent.style.pointerEvents = 'none';
  parent.style.position = 'fixed';

  initiator.animate({
    padding: '0',
    transform: `translate3d( ${XAxisChangeGap}px, ${YAxisChangeGap}px,1px)`,
    width: '40rem',
    height: '25rem',
    rotate: '0deg',
    borderRadius: '2rem',
    boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.25)',
  }, {
    fill: 'forwards',
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    duration: 1200,
  }, );

  setTimeout(() => {
    curtain.animate({
      opacity: 0,
      zIndex: -48
    }, {
      duration: 600,
      fill: 'forwards',
      easing: 'ease',
    }, );

    parent.animate({
      opacity: 0
    }, {
      fill: 'forwards',
      easing: 'ease',
      duration: 600,
      delay: 300
    });

  }, 1200)
}