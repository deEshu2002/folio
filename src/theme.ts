
export let isCurrThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

export function toggleTheme() {
    isCurrThemeDark = !isCurrThemeDark;
}

export function getThemeBasedColorOf(element: string, property: string) {
    //  function changes that depends js
    const computedStyle = window.getComputedStyle(document.querySelector(`${element}`) as HTMLElement);
    let propertyValue;
    if (isCurrThemeDark) {
        propertyValue = computedStyle.getPropertyValue(`${property}`)
    } else {
        propertyValue = computedStyle.getPropertyValue(`--${property}`);
    }
    return propertyValue;
}

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    // console.log('mode changed!!');
    // projHintShadows = (document.getElementById('first') as HTMLAnchorElement).style.boxShadow;

    // cueShadows = (document.getElementById('first-ref') as HTMLAnchorElement).style.boxShadow;

// });