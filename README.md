# Skeleton Library for JavaScript Developers

A lightweight and flexible library designed for JavaScript developers. It works as both:
- An **ES Module** (using `import`/`export`).
- A **callable function** for added convenience.

## Features

- **Modular Design**: Import as a module or use as a callable function.
- **Configurable**: Customize behavior using the configuration object.
- **Debugging Support**: Enable debug mode to log internal actions.


## Installation

### Using it
- copy on your javascript file this funtion 
  

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


-and then when you get the funtion you will need to connect skeleton css file on your index file html  
-also you need to make your script src module ( <script src="your-file_js.js" type="module"></script> )
-You have to pass two arguments on skleton variable (const skeleton = Skeleton('ecommerce','white'))  the first one is type of your skleton example [body, dashbord, ecommerce, card ...]
- You can pass:-
  - 'body'
  - 'dashboard'
  - 'card'
  - 'ecommerce'
 

 - if you dont see it read the read me file you will get the function
