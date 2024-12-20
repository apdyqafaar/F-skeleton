
import { Skeleton } from "./F-skeleton-js/main.js"
document.addEventListener('DOMContentLoaded',()=>skeletonFunction())

const skeletonFunction = () => {
    const skeleton = Skeleton('ecommerce','white')
    let Elemet =document.querySelector('body')
    Elemet.style.position='relative'
    
    Elemet.appendChild( skeleton)
    
    setTimeout(()=> {
        Elemet.removeChild(skeleton)
    }, 2000)
}
