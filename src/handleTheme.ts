import { cues} from './main';
import { handleSunMoonAnimation } from './sunMoonTransition';

const storageKey = 'theme-preference';

const getSavedColorPreference = () =>  {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
}

const getDefaultColorPreferenece = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches === true ? "dark" : "light";
}

export const mode = getSavedColorPreference() ?? getDefaultColorPreferenece();

export const setSavedColorPreferenece = () => {
    const oppositeTheme = mode === 'light'? 'dark': 'light';
    localStorage.setItem(storageKey, oppositeTheme);
}

export const lightThemeMap: Map<string, string> = new Map([['--background-color', '#ffffff'], ['--text-color', '#062337'], ['--accent-color-primary', '#ebebeb'], ['--accent-color-secondary', '#b6b6af'], ['--cue-box-shadow', '0px 1em 2em -1em #cccccc, 0px 2em 2em -1em #cccccc, inset 0 0.05rem 0.5rem #ffffff'], ['--showcase-slider-bg1', 'linear-gradient(0deg, rgba(255, 255, 255, 0.75) 0%, #ffffff 20%)'], ['--showcase-slider-bg2', 'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, #ffffff 20%)'], ['--hint-img-shadow', '0px 20px 25px #9d9d95'], ['--text-bg-secondary', '#cccccc'], ['--accent-color-tertiary', '#9d9d95']])
export const darkThemeMap: Map<string, string> = new Map([['--background-color', '#242424'], ['--text-color', '#ebebeb'], ['--accent-color-primary', '#090401'], ['--accent-color-secondary', '#5d5d56'], ['--cue-box-shadow', '0px 1em 2em -1em #090401, 0px 2em 2em -1em #090401, inset 0 0.05rem 0.5rem #242424'], ['--showcase-slider-bg1', 'linear-gradient(0deg, rgba(36, 36, 36, 0.75) 0%, #242424 20%)'], ['--showcase-slider-bg2', 'linear-gradient(180deg, rgba(36, 36, 36, 0.75) 0%, #242424 20%)'], ['--hint-img-shadow', '0px 20px 25px #090401'], ['--text-bg-secondary', '#333333'], ['--accent-color-tertiary', '#676767']]);

export const handleTheme = (initFlag?:boolean) => {
    const isInit = initFlag ?? false;
    const storedColorPref = getSavedColorPreference();
    const browserPref = getDefaultColorPreferenece();

    if (isInit && storedColorPref === null || storedColorPref === browserPref) {
        return;
    }
    else {
        // transition based on saved state of theme 
        const docStyles = document.documentElement.style;

        if (storedColorPref === 'dark') {
            // change colors to dark
            for (const [key, value] of darkThemeMap.entries()) {
                docStyles.setProperty(key, value);
            }

        } else if (storedColorPref === 'light') {
            // change colors to light
            for (const [key, value] of lightThemeMap.entries()) {
                docStyles.setProperty(key, value);
            }
        }
    }
    handleSunMoonAnimation();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
  console.log('mode changed!!');
    handleTheme(true);

  cues.forEach((elem) => {
    elem.setAttribute('style', '');
  });
});