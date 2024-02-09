import { initialUserPrefferedState } from '../Environment/themeOperations';
import { reducedMotion } from '../Environment/reducedmotion';
import { darkThemeMap, lightThemeMap } from '../Database/jsThemesData';

export function handleMouseOutRotation(e: Event) {
  const eventInitiator = e.target as HTMLImageElement;
  eventInitiator.style.filter = 'brightness(91%)';

  if (reducedMotion) {
    return;
  }

  const cueShadows =
    initialUserPrefferedState === 'light' ? lightThemeMap.get('cue-box-shadow') : darkThemeMap.get('cue-box-shadow');

  const currElemParent = eventInitiator.parentElement as HTMLAnchorElement;

  if (eventInitiator.classList.length === 1) {
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
  const eventInitiator = e.target as HTMLImageElement;
  eventInitiator.style.filter = 'brightness(100%)';

  if (reducedMotion) {
    return;
  }

  eventInitiator.style.rotate = '0deg';
  if (initialUserPrefferedState === 'dark') {
    eventInitiator.style.boxShadow = darkThemeMap.get('cue-mouse-over-box-shadow') ?? '';
  } else if (initialUserPrefferedState === 'light') {
    eventInitiator.style.boxShadow = lightThemeMap.get('cue-mouse-over-box-shadow') ?? '';
  }
}
