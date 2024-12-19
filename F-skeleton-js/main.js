import { body } from "./Body.js";
import { dashboard } from "./Dashboard.js";
import { card } from "./Card.js";

export const Skeleton = (type) => {

    
    if(type === 'body'){
        return body();
    }

    if(type ==='dashboard'){
        return dashboard();
    }

    if(type === 'card'){
        return card()
    }


 
}