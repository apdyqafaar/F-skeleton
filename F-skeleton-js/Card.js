
export const card = () =>{

    const vertical_card_container = document.createElement('div')
    vertical_card_container.classList.add('vertical_card_container')
    vertical_card_container.innerHTML=`
       
         <div class="vertical_card ">

        <div class="right_side_middle1"></div>

        <ul class="left_side_ul ul2">
            <li class="li_color small"></li>
            <li class="li_color width2 small"></li>
            <div class="top_left">
                <div class="img_skel small"></div>
                <div class="text_skel small"></div>
                 
             </div>
             <!-- <div class="top_left">
                <div class="img_skel small"></div>
                <div class="text_skel small"></div>
                 
             </div> -->
            <li class="li_color width2 small"></li>
            <li class="li_color width3 small"></li>

       </ul>
          


    </div>
    
     `;
     return vertical_card_container;
}