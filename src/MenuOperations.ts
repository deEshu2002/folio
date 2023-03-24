const menu = document.getElementById("showcase-menu") as HTMLUListElement;

export function handleMenuVisibility(){
    const stickyTopValue = window.innerHeight/8;

    if(menu.getBoundingClientRect().top <=  stickyTopValue + 80){
        menu.animate({opacity: 1, zIndex:9}, { duration:600, fill:'forwards', easing:'cubic-bezier(0.25, 1, 0.5, 1)'})
    }else{
        menu.animate({opacity: 0, zIndex:-1}, { duration:600, fill:'forwards', easing:'cubic-bezier(0.25, 1, 0.5, 1)'})
    }
}

export function handleShowCaseMenuTransition(e:Event){
    e.preventDefault();
    (document.querySelector('.showcase-item.showcase-menu-middle') as HTMLLIElement).classList.remove('showcase-menu-middle');
    (e.target as HTMLLIElement).classList.add('showcase-menu-middle');
}