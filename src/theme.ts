import { cues } from './main';

export let isCurrThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

export function toggleTheme() {
  isCurrThemeDark = !isCurrThemeDark;
}

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

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
  // console.log('mode changed!!');
  isCurrThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  cues.forEach((elem) => {
    elem.setAttribute('style', '');
  });
});
