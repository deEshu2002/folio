import { getThemeBasedColorOf } from "./theme";

export function handleMouseOutRotation(e: Event) {
    const eventInitiator = (e.target as HTMLImageElement);
    const parentAnchor = eventInitiator.parentNode as HTMLAnchorElement;

    const cueShadows = getThemeBasedColorOf('#first-ref','box-shadow')

    if (parentAnchor.classList.length === 0) {
        parentAnchor.style.boxShadow = cueShadows;
        if (parentAnchor.id === 'first-ref' || parentAnchor.id === 'third-ref') {
            parentAnchor.style.rotate = '9deg';
        } else if(parentAnchor.id === 'second-ref' || parentAnchor.id === 'fourth-ref'){
            parentAnchor.style.rotate = '-9deg';
        }
    }
}


export function handleMouseOverRotation(e: Event) {
    const eventInitiator = (e.target as HTMLImageElement);
    const parentAnchor = eventInitiator.parentElement as HTMLAnchorElement;

    parentAnchor.style.rotate = '0deg';
    
    
    // console.log( window.getComputedStyle(document.getElementById('first-ref') as HTMLAnchorElement).boxShadow)
    const cueShadows = getThemeBasedColorOf('#first-ref','box-shadow')

        parentAnchor.style.boxShadow = cueShadows;
}