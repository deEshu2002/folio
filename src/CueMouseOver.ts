
export function handleMouseOutRotation(e: Event) {
    const cueShadows = (document.querySelector('a[href="#fourth"] img') as HTMLImageElement).style.boxShadow;
    const target = (e.target as HTMLImageElement);
    if (target.classList.length === 1) {
        target.style.boxShadow = cueShadows;
        if (target.classList[0] === 'positive-rotation') {
            target.style.rotate = '9deg';
        } else {
            target.style.rotate = '-9deg';
        }
    }
}

export function handleMouseOverRotation(e: Event) {
    const target = (e.target as HTMLImageElement);
    target.style.rotate = '0deg';
    // if(isDarkMode){
        
    // }else{

        target.style.boxShadow = '0px 20px 25px -1em hsl(0, 0%, 25%)';
        // target.style.boxShadow = '0px 2px 25px -1em hsl(0,0%,100%)';
  
    // }
}