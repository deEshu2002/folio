import { initialUserPrefferedState } from './themeOperations';
import { reducedMotion } from './reducedmotion';
import { darkThemeMap, lightThemeMap } from './themesData';

export function handleMouseOutRotation(e: Event) {
  if (reducedMotion) {
    return;
  }
  const eventInitiator = e.target as HTMLImageElement;

  const cueShadows =
    initialUserPrefferedState === 'light'
      ? lightThemeMap.get('--cue-box-shadow')
      : darkThemeMap.get('--cue-box-shadow');

  const currElemParent = eventInitiator.parentElement as HTMLAnchorElement;

  if (eventInitiator.classList.length === 0) {
    if (cueShadows) {
      eventInitiator.style.boxShadow = cueShadows;
    }

    if (currElemParent.id == 'first-ref' || currElemParent.id == 'third-ref') {
      eventInitiator.style.rotate = '9deg';
    } else if (currElemParent.id == 'second-ref' || currElemParent.id == 'fourth-ref') {
      eventInitiator.style.rotate = '-9deg';
    }
  }
}

export function handleMouseOverRotation(e: Event) {
  if (reducedMotion) {
    return;
  }

  const eventInitiator = e.target as HTMLImageElement;

  eventInitiator.style.rotate = '0deg';
  if (initialUserPrefferedState === 'dark') {
    eventInitiator.style.boxShadow = '0px 1rem 2rem -1rem #090401';
  } else if (initialUserPrefferedState === 'light') {
    eventInitiator.style.boxShadow = '0px 1rem 2rem -1rem #cccccc';
  }
}
