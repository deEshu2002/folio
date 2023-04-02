import { resetJSStyles } from './main';
import { handleSunMoonAnimation } from './sunMoonTransition';
import { mode } from './types';

const storageKey = 'theme-preference';

export let initialUserPrefferedState:mode = window.matchMedia('(prefers-color-scheme: dark)').matches === true ? 'dark' : 'light';

export function toggleColorPreferenceState() {
  initialUserPrefferedState = initialUserPrefferedState === 'dark' ? 'light' : 'dark';
}

export function setSavedColorPreferenece() {
  const oppositeTheme:mode = localStorage.getItem(storageKey) === 'light' ? 'dark' : 'light';
  const currentBrowserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches === true ? 'dark' : 'light';
  localStorage.clear();
  if(currentBrowserTheme !== oppositeTheme){
    localStorage.setItem(storageKey, oppositeTheme);
  }
}

export const lightThemeMap: Map<string, string> = new Map([
  ['--background-color', '#ffffff'],
  ['--text-color', '#062337'],
  ['--accent-color-primary', '#ebebeb'],
  ['--accent-color-secondary', '#b6b6af'],
  ['--cue-box-shadow', '0px 1em 2em -1em #cccccc, 0px 2em 2em -1em #cccccc, inset 0 0.05rem 0.5rem #ffffff'],
  ['--showcase-slider-bg1', 'linear-gradient(0deg, rgba(255, 255, 255, 0.75) 0%, #ffffff 20%)'],
  ['--showcase-slider-bg2', 'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, #ffffff 20%)'],
  ['--hint-img-shadow', '0px 20px 25px #9d9d95'],
  ['--text-bg-secondary', '#cccccc'],
  ['--accent-color-tertiary', '#9d9d95'],
]);
export const darkThemeMap: Map<string, string> = new Map([
  ['--background-color', '#242424'],
  ['--text-color', '#ebebeb'],
  ['--accent-color-primary', '#090401'],
  ['--accent-color-secondary', '#5d5d56'],
  ['--cue-box-shadow', '0px 1em 2em -1em #090401, 0px 2em 2em -1em #090401, inset 0 0.05rem 0.5rem #242424'],
  ['--showcase-slider-bg1', 'linear-gradient(0deg, rgba(36, 36, 36, 0.75) 0%, #242424 20%)'],
  ['--showcase-slider-bg2', 'linear-gradient(180deg, rgba(36, 36, 36, 0.75) 0%, #242424 20%)'],
  ['--hint-img-shadow', '0px 20px 25px #090401'],
  ['--text-bg-secondary', '#333333'],
  ['--accent-color-tertiary', '#676767'],
]);

function fillColors(ColorState:mode) {
  // transition based on provided state of theme
  const docStyles = document.documentElement.style;
  if (ColorState === 'dark') {
    // change colors to dark
    for (const [key, value] of darkThemeMap.entries()) {
      docStyles.setProperty(key, value);
    }
  } else if (ColorState === 'light') {
    // change colors to light
    for (const [key, value] of lightThemeMap.entries()) {
      docStyles.setProperty(key, value);
    }
  }
}

function getSavedPreferenece() {
  const lStype = typeof localStorage.getItem(storageKey);
  if(lStype === typeof initialUserPrefferedState){
    return localStorage.getItem(storageKey) as mode;
  }else{
    return null;
  }
}

export const handleTheme = ({ initFlag }: { initFlag: boolean }) => {
  if (initFlag) {
      const savedPrefState = getSavedPreferenece();
      if(savedPrefState){
        // transition based on saved state of theme
        initialUserPrefferedState = savedPrefState;
        fillColors(savedPrefState);
      }
  } else {
    // transition based on browser agent preffered theme
    fillColors(initialUserPrefferedState);
  }

  handleSunMoonAnimation();
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
  console.log('mode changed!!');
  toggleColorPreferenceState();
  handleTheme({ initFlag: true });

  resetJSStyles();
});
