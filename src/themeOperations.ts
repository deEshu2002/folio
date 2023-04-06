import { resetJSStyles } from './main';
import { handleSunMoonAnimation } from './sunMoonTransition';
import { darkThemeMap, lightThemeMap } from './themesData';
import { handleThemeProps, mode } from './types';

const storageKey = 'theme-preference';

export let initialUserPrefferedState: mode =
  window.matchMedia('(prefers-color-scheme: dark)').matches === true ? 'dark' : 'light';

function toggleColorPreferenceState() {
  initialUserPrefferedState = initialUserPrefferedState === 'dark' ? 'light' : 'dark';
}

function setSavedColorPreferenece() {
  localStorage.setItem(storageKey, initialUserPrefferedState);
}

function fillColors(ColorState: mode) {
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
  if (lStype === typeof initialUserPrefferedState) {
    return localStorage.getItem(storageKey) as mode;
  } else {
    return null;
  }
}

export const handleTheme = ({ initFlag }: handleThemeProps) => {
  if (initFlag) {
    const savedPrefState = getSavedPreferenece();
    if (savedPrefState) {
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

export function themeToggle() {
  toggleColorPreferenceState();
  setTimeout(() => setSavedColorPreferenece(), 100);
  handleTheme({ initFlag: false });

  resetJSStyles();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
  console.log('mode changed!!');
  toggleColorPreferenceState();
  handleTheme({ initFlag: true });

  resetJSStyles();
});
