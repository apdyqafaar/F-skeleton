import { Skeleton } from "./F-skeleton-js"

document.addEventListener('DOMContentLoaded',()=>{

const skeleton = Skeleton('card')
console.log(skeleton)
let body =document.querySelector('.div')
body.style.position='relative'

body.appendChild( skeleton)

setTimeout(()=> {
    body.removeChild(skeleton)
}, 2000)

})

