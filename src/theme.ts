import { cues,} from './main';
import { appendModeToggleButton } from './sunMoonTransition';
import { SunOrMoon } from './SunOrMoon';


export function getThemeBasedColorOf(element: string, property: string) {
  //  function changes that depends js
  const computedStyle = window.getComputedStyle(document.querySelector(`${element}`) as HTMLElement);
  let propertyValue;
  if (isCurrThemeDark) {
    propertyValue = computedStyle.getPropertyValue(`--dark-${property}`);
  } else {
    propertyValue = computedStyle.getPropertyValue(`--light-${property}`);
  }
  
  // console.log(element, property, computedStyle);
  return propertyValue;
}

export let isCurrThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

export function toggleTheme() {
  isCurrThemeDark = !isCurrThemeDark;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
  // console.log('mode changed!!');
  isCurrThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  //render new svg 
  const newSVG = new SunOrMoon(isCurrThemeDark);
  appendModeToggleButton(newSVG);

  cues.forEach((elem) => {
    elem.setAttribute('style', '');
  });
});