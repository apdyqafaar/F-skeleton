import { body } from "./Body.js";
import { dashboard } from "./Dashboard.js";
import { card } from "./Card.js";
import { vertical_card } from "./vertical_card_container.js";
import { Ecommerce } from "./Ecomece.js";

export const Skeleton = (type,color) => {

    
    if(type === 'body'){
        return body(color);
    }

    if(type ==='dashboard'){
        return dashboard(color);
    }

    if(type === 'card'){
        return card(color)
    }

    if(type === 'vertical_card'){
        return vertical_card(color);
    }
    if(type === 'ecommerce'){
       return Ecommerce(color)
    }

if(type !== 'body' && type !== 'dashboard' && type !== 'card' && type !== 'vertical_card' && type !== 'ecommerce'){
    console.error('unknown argument was passed')
}
 
}
