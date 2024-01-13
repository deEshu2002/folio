import { header, menuValues, showcaseContentItems, showcaseMenu} from "./main";

export let isMenuVisible = false;

export function handleMenuVisibility() {
  const stickyTopValue = window.innerHeight / 8;

  if (showcaseMenu.getBoundingClientRect().top <= stickyTopValue + 80) {
    if (isMenuVisible) return;
    showcaseMenu.animate(
      { opacity: 1, zIndex: 9 },
      { duration: 600, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' },
    );
    isMenuVisible = true;
    if(header){
      header.style.backgroundColor = 'var(--background-color)';
    }
  } else {
    isMenuVisible = false;
    if(header){
      header.removeAttribute('style');
    }
    showcaseMenu.animate(
      { opacity: 0, zIndex: -1 },
      { duration: 600, fill: 'forwards', easing: 'cubic-bezier(0.25, 1, 0.5, 1)' },
    );
  }
}

let onClickTransitionTimeout = false;

export function handleShowCaseMenuTransition(e: Event) {
  onClickTransitionTimeout = true;
  (document.getElementById('showcase-menu-middle') as HTMLLIElement).removeAttribute('id');
  const parent = e.currentTarget;


  (parent as HTMLLIElement).setAttribute('id','showcase-menu-middle');
  setTimeout(() => {
    (parent as HTMLLIElement).classList.remove('active');
  }, 100);
  setTimeout(() =>{
    onClickTransitionTimeout = false;
  }, 600);
}

export function handleMenuSliderMouseEnterVisibility() {
  (document.getElementById('showcase-menu-middle') as HTMLLIElement).classList.add('active');
}

export function handleMenuSliderMouseLeaveVisibility() {
  (document.getElementById('showcase-menu-middle') as HTMLLIElement).classList.remove('active');
}

export function updateShowCaseMiddle(){
  const links = showcaseMenu.getElementsByTagName('a');
  const linksIdRef:string[] = [];

  [...links].forEach(elem => {
    const url = new URL(elem.href);
    const id = url.hash.substring(1);
    linksIdRef.push(id);
  })

  const callback = (entries:any) => {
    entries.forEach((entry:IntersectionObserverEntry) => {
      if(entry.isIntersecting && !onClickTransitionTimeout){
        const id = entry.target.id;
        const idx = linksIdRef.indexOf(id);
        (document.getElementById('showcase-menu-middle') as HTMLLIElement).removeAttribute('id');
        let target:null | Element;
        if(idx !== -1){
          target = menuValues.item(idx);
          target && target.setAttribute('id','showcase-menu-middle');
          setTimeout(() => {
              target && target.classList.remove('active');
            }, 10);
          }
        }
    });
  };

  const options = {
    root: null,
    rootMargin: "51.2px",
    threshold: .5,
  };
  
  const observer = new IntersectionObserver(callback, options);  

  showcaseContentItems && [...showcaseContentItems].forEach(elem => {
    const id = elem.id;
    if(linksIdRef.find(i => i === id)){
      observer.observe(elem);
    };
  })
}