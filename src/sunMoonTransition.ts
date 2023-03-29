import { isCurrThemeDark, toggleTheme } from './theme';
import { SunOrMoon } from './SunOrMoon';


const currTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
let currThemeBasedSVG = new SunOrMoon(currTheme);
let svg = currThemeBasedSVG.getSunOrMoon();

export function appendModeToggleButton(newSVG?:SunOrMoon) {
  
  const modeToggle = document.getElementById('mode-toggle') as HTMLButtonElement;
  if (modeToggle.hasChildNodes() && newSVG) {
    modeToggle.removeChild(svg);
    currThemeBasedSVG = newSVG;
    svg = newSVG.getSunOrMoon();
    modeToggle.appendChild(svg);
  }
  modeToggle.appendChild(svg);
}

export function sunMoonTransition() {
  toggleTheme();
  const currSvgTheme = isCurrThemeDark;
  currThemeBasedSVG.modeSvg.animate(
    { transform: currSvgTheme ? 'rotate(40deg)' : 'rotate(90deg)' },
    { fill: 'forwards', duration: 500, easing: 'ease', delay: 100 },
  );
  currThemeBasedSVG.maskCircle.animate(
    { cx: currSvgTheme ? 12 : 30, cy: currSvgTheme ? 4 : 0 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
  currThemeBasedSVG.coState.animate(
    { r: currSvgTheme ? 9 : 5 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
  currThemeBasedSVG.sunLineGroup.animate(
    { opacity: currSvgTheme ? 0 : 1 },
    { fill: 'forwards', duration: 500, easing: 'cubic-bezier(.69,.28,0,1.09)', delay: 100 },
  );
}
