import { cues, resetJSSetStyles } from '../main';
import { handleSunMoonAnimation } from '../CSSEffects/SunMoonTransition';
import { handleThemeProps, mode } from '../types';

const storageKey = 'theme-preference';

export let initialUserPrefferedState: mode =
  window.matchMedia('(prefers-color-scheme: dark)').matches === true ? 'dark' : 'light';

function toggleColorPreferenceState() {
  initialUserPrefferedState = initialUserPrefferedState === 'dark' ? 'light' : 'dark';
}

function setSavedPreferenece() {
  localStorage.setItem(storageKey, initialUserPrefferedState);
}

function fillColors(ColorState: mode) {
  // transition based on provided state of theme
  const docElement = document.documentElement;
  if (ColorState === 'dark') {
    docElement.setAttribute('data-user-theme', 'dark');
  } else if (ColorState === 'light') {
    docElement.setAttribute('data-user-theme', 'light');
  }
}

function getSavedPreferenece() {
  const lStype = typeof localStorage.getItem(storageKey);
  if (lStype === typeof initialUserPrefferedState) {
    return localStorage.getItem(storageKey) as mode;
  } else {
    return;
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
  setTimeout(() => setSavedPreferenece(), 100);
  handleTheme({ initFlag: false });

  resetJSSetStyles(cues);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
  console.log('mode changed!!');
  toggleColorPreferenceState();
  handleTheme({ initFlag: true });

  resetJSSetStyles(cues);
});
