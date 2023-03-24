export function handleMouseOutRotation(e: Event) {
    const target = (e.target as HTMLImageElement);
    if (target.classList.length === 1) {
        target.style.boxShadow = '0px 1em 2em -1em hsl(60, 4%, 70%), 0px 2em 2em -1em hsl(60, 4%, 80%), inset 0 .87em 1em #fff'
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
    target.style.boxShadow = '0px 20px 25px -1em rgba(0, 0, 0, 0.25)';
}