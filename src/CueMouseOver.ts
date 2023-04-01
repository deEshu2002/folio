import { darkThemeMap, initialUserPrefferedState, lightThemeMap} from './handleTheme';

export function handleMouseOutRotation(e: Event) {
  const eventInitiator = e.target as HTMLImageElement;

  let cueShadows;

  if( initialUserPrefferedState === 'light'){
    cueShadows = lightThemeMap.get('--cue-box-shadow');
  }else{
    cueShadows = darkThemeMap.get('--cue-box-shadow');
  }

  const currElemParent = eventInitiator.parentElement as HTMLAnchorElement;

  if (eventInitiator.classList.length === 0) {
    eventInitiator.style.boxShadow = cueShadows!;

    if (currElemParent.id == 'first-ref' || currElemParent.id == 'third-ref') {
      eventInitiator.style.rotate = '9deg';
    } else if (currElemParent.id == 'second-ref' || currElemParent.id == 'fourth-ref') {
      eventInitiator.style.rotate = '-9deg';
    }
  }
}

export function handleMouseOverRotation(e: Event) {
  const eventInitiator = e.target as HTMLImageElement;

  eventInitiator.style.rotate = '0deg';
  if (initialUserPrefferedState === 'dark') {
    eventInitiator.style.boxShadow = '0px 1rem 2rem -1rem #090401';
  } else if( initialUserPrefferedState === 'light'){
    eventInitiator.style.boxShadow = '0px 1rem 2rem -1rem #cccccc';
  }
}
