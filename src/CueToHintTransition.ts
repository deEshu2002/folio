// function xAxisDifference(initialElement:HTMLAnchorElement){
//     return targetLeft-left;
// }
function yAxisDifference(initialElement: HTMLAnchorElement) {
  // const top = initialElement.getBoundingClientRect().top;
  // const targetTop = (document.querySelector('#first .proj-hint') as HTMLImageElement).getBoundingClientRect().top;

  // console.log(top, targetTop);
  // return targetTop - top;
}

const curtain = document.querySelector('.curtain') as HTMLDivElement;
const target = document.querySelector('.showcase-content article .proj-hint') as HTMLImageElement;
const nav = document.querySelector('nav');


export function handleImageToWorkTransition(e: Event) {

  const targetPositions = target.getBoundingClientRect();
  const targetleftPosition = targetPositions.left;
  const targetRightPosition = targetPositions.right;
  // const targetHeight = targetPositions.height;

  const initiator = e.target as HTMLImageElement;

  curtain.animate({
    opacity: '1',
    zIndex: '4',
  }, {
    duration: 300,
    fill: 'forwards',
    easing: 'ease',
  }, );

  const parentPositions = ((e.target as HTMLImageElement).parentElement as HTMLAnchorElement).getBoundingClientRect();
  const currLeftPosition = parentPositions.left;
  const currRightPosition = parentPositions.right;
  // const currBottomPosition = parentPositions.bottom;
  // const currTopPosition = parentPositions.top;

  const XAxisChangeGap = (currLeftPosition < targetleftPosition) ? targetleftPosition - currLeftPosition : targetRightPosition - currRightPosition;

  // const navHeight = nav?.getBoundingClientRect().height ?? 0;
  // const idealBottom = navHeight + targetHeight;
  
  // const YAxisChangeGap = (idealBottom < currBottomPosition && navHeight < currTopPosition) ? idealBottom - currBottomPosition : navHeight - currTopPosition;
  // console.log(YAxisChangeGap, currTopPosition)


  initiator.classList.add('stop-rotation'); // so that classlist size will increase and it will not be liable to rotate further on mouseover;

  if (initiator.parentElement) {
    initiator.parentElement.style.zIndex = '49';
    initiator.parentElement.style.pointerEvents = 'none';
    initiator.parentElement.style.position = 'fixed';
  }

  initiator.animate({
    padding: '0',
    transform: `translate3d(${XAxisChangeGap}px, -${0}%,1px)`,
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
}