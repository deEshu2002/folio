


export function getThemeBasedColorOf(query:string){
    //  function changes that depends js

//     switch (query) {
//         case 'projHintShadows':
            
//             break;
//     case 'cueShadows':
            
//             break;
// case '':
            
//             break;
// case 'no':
            
//             break;
//         default:
//             break;
//     }

}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    console.log('mode changed!!');
    // projHintShadows = (document.getElementById('first') as HTMLAnchorElement).style.boxShadow;

    // cueShadows = (document.getElementById('first-ref') as HTMLAnchorElement).style.boxShadow;

});