export const dashboard = (color) => {
  const dashbord_container = document.createElement("div");
  dashbord_container.classList.add("dashbord_container");
  dashbord_container.innerHTML = `
        
   <div class="grid_container">

        <!-- left_side -->
       <div class="left_side">
          <ul class="left_side_ul">
            <li class="li_color "></li>
            <li class="li_color width2"></li>
            <li class="li_color width1"></li>
            <li class="li_color width2"></li>
            <li class="li_color width3"></li>
            <li class="li_color width4"></li>
            <li class="li_color width1"></li>
            <li class="li_color width1"></li>
            <li class="li_color width4"></li>
            <li class="li_color width3"></li>
            <li class="li_color width3"></li>
            <li class="li_color width3"></li>


          </ul>
       </div>



        <!-- right_side -->
         <div class="right_side">
             <div class="rigside_top">
                <div class="top_left">
                   <div class="img_skel"></div>
                   <div class="text_skel"></div>
                    
                </div>
                <div class="top_right"></div>
             </div>

             <div class="right_side_middle">
             </div>


             <ul class="left_side_ul">
                <li class="li_color "></li>
                <li class="li_color width2"></li>
                <div class="top_left">
                    <div class="img_skel"></div>
                    <div class="text_skel"></div>
                     
                 </div>
                 <div class="top_left">
                    <div class="img_skel"></div>
                    <div class="text_skel"></div>
                     
                 </div>
                <li class="li_color width2"></li>
                <li class="li_color width3"></li>

                <li class="li_color width3"></li>
            <li class="li_col1 middle_col_l2"></li>
                
              
    
    
              </ul>

         </div>

   </div>

      `;
  if (color == "black") {
    dashbord_container.style.background='#000'
    dashbord_container.querySelector('.grid_container').style.background='#000'
  }

  return dashbord_container;
};
