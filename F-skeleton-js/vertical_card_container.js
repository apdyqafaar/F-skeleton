
export const vertical_card = (color) =>{

    const vertical_card_container = document.createElement('div')
    vertical_card_container.classList.add('vertical_card_container')
    vertical_card_container.innerHTML=`
       
         <div class="verticar_card">
        <div class="top"></div>
        <div class="bottom">
            <ul class="vertical_card_ul">
               <li class="vertical_card_ul_li"></li>
               <li class="vertical_card_ul_li width2"></li>
               <li class="vertical_card_ul_li width3"></li>
               <li class="vertical_card_ul_li width3"></li>
               <li class="vertical_card_ul_li width2"></li>
            </ul>
        </div>
     </div>
    
     `;
     if (color == "black") {
        vertical_card_container.style.background='#000'
        // vertical_card_container.querySelector('.vertical_card ').style.background='#000'
      }
     return vertical_card_container;
}