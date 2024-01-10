import { circle, dot, text} from "../main";
import { coordinates } from "../types";

export function mouseLeaveFromPreviewImage(elem:Element){
    elem.animate({transform: "scale(1)"},{ duration: 300, easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)', fill: 'forwards'});
    circle && circle.animate({transform: "scale(1)", fill: "var(--text-bg-secondary)"},{duration: 300, easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)', delay: 100, fill: 'forwards'})
    text && text.animate({opacity: 0}, { duration: 250, easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)', fill: 'forwards'});
}

export function mouseEnterOverPreviewImage(elem: Element){
    elem.animate({transform: "scale(1.125)"},{ duration: 400, easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)', delay: 150, fill: 'forwards' });
    circle && circle.animate({transform: "scale(6)", fill: "var(--background-color)"},{duration: 400, easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)', fill:'forwards'})
    text && text.animate({opacity: 1}, { duration: 300, easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)', delay: 100 , fill: 'forwards'})
}

export const updateCords = (elem: HTMLElement, newMouseCord: coordinates, error=0) => {
    const elemCords = elem.getBoundingClientRect();
    const prevCoords = {
        x: elemCords.left,
        y: elemCords.top,
    }
    if (prevCoords.x === newMouseCord.x && prevCoords.y === newMouseCord.y) return;

    elem.animate(
        { top: `${newMouseCord.y-error}px`, left: `${newMouseCord.x-error}px`},
        { duration: 1500, easing: 'cubic-bezier(0.45, 0, 0.55, 1)', delay: 0, fill:'forwards'},
    );
}

export function cursorInit(){
    dot && dot.animate(
        { transform: "scale(1)", opacity: 1},
        { duration: 1000, easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)', delay: 1000, fill: 'forwards'},
    );
}