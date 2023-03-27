import { userPreferedTheme } from "./main";

export function handleMouseOutRotation(e: Event) {
    const cueShadows = (document.getElementById('first') as HTMLAnchorElement).style.boxShadow;
    const eventInitiator = (e.target as HTMLImageElement);
    const parentAnchor = eventInitiator.parentNode as HTMLAnchorElement;
    console.log(eventInitiator);

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


    console.log(eventInitiator)
    parentAnchor.style.rotate = '0deg';

    if(userPreferedTheme === 'dark'){
        parentAnchor.style.boxShadow = '0px 20px 25px -1em #090401';
    }else{
        parentAnchor.style.boxShadow = '0px 20px 25px -1em #cccccc';
    }
}