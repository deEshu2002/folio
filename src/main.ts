import './style.css'


function handleMenuVisibility(){
    const menu = document.getElementById("showcase-menu");
    const stickyTopValue = window.innerHeight/8;

    if(menu!.getBoundingClientRect().top <=  stickyTopValue){
        menu!.animate({opacity: 1, zIndex:9}, { duration:1200, fill:'forwards'})
    }else{
        menu!.animate({opacity: 0, zIndex:-1}, { duration:1200, fill:'forwards'})
    }
    
}

window.addEventListener('scroll', handleMenuVisibility, true);