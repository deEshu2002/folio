import { initialUserPrefferedState } from '../Environment/themeOperations';
import { modeButton } from '../main';
import { reducedMotion } from '../Environment/reducedmotion';

export function handleSunMoonAnimation() {
  const svg = modeButton?.children[0] as SVGElement;

  const circleMask = svg?.children[0]?.children[1] as SVGCircleElement;
  console.log(circleMask);

  const sharedCircle = svg?.children[1] as SVGCircleElement;

  const sunLines = svg?.children[2] as SVGGElement;
  const isDarkMode = initialUserPrefferedState === 'dark';

  setTimeout(() => {
    if (isDarkMode) {
      svg.style.stroke = 'white';
      sharedCircle.style.fill = 'white';
    } else {
      svg.style.stroke = 'black';
      sharedCircle.style.fill = 'black';
    }
  }, 50);

  if (reducedMotion) {
    sharedCircle.setAttribute('r', isDarkMode ? '9' : '5');
    circleMask.setAttribute('cx', isDarkMode ? '12' : '30');
    circleMask.setAttribute('cy', isDarkMode ? '4' : '0');
    sunLines.style.opacity = isDarkMode ? '0' : '1';
    return;
  }

  svg?.animate(
    { transform: isDarkMode ? 'rotate(0deg)' : 'rotate(90deg)' },
    { fill: 'forwards', duration: 500, easing: 'ease', delay: 100 },
  );
  circleMask?.animate(
    { cx: isDarkMode ? '12px' : '30px', cy: isDarkMode ? '4px' : '0px' },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
  setTimeout(() => {
    sharedCircle.setAttribute('r', isDarkMode ? '9' : '5');
  }, 250);
  sunLines?.animate(
    { opacity: isDarkMode ? 0 : 1 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
}
