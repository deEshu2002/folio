import { getThemeBasedColorOf, isCurrThemeDark } from "./theme";

export function handleMouseOutRotation(e: Event) {
    const eventInitiator = (e.target as HTMLImageElement);

    const cueShadows = getThemeBasedColorOf('#first-ref img','box-shadow')
    const currElemParent = eventInitiator.parentElement as HTMLAnchorElement;

    if (eventInitiator.classList.length === 0) {
        eventInitiator.style.boxShadow = cueShadows;

        if (currElemParent.id == 'first-ref' || currElemParent.id == 'third-ref') {
            eventInitiator.style.rotate = '9deg';
        } 
         else if(currElemParent.id == 'second-ref' || currElemParent.id == 'fourth-ref'){
            eventInitiator.style.rotate = '-9deg';
        }
    }
}


export function handleMouseOverRotation(e: Event) {
    const eventInitiator = (e.target as HTMLImageElement);
console.log(isCurrThemeDark)

    eventInitiator.style.rotate = '0deg';
    if(isCurrThemeDark){
        eventInitiator.style.boxShadow = "0px 1rem 2rem -1rem #090401";
    }
    else{
        eventInitiator.style.boxShadow = "0px 1rem 2rem -1rem #cccccc";
    }

}