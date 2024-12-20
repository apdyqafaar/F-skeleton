
export const Ecommerce = (color) => {
     
    const ecommerce_container = document.createElement('div')
    ecommerce_container.classList.add('ecommerce_container')
    ecommerce_container.innerHTML=`
    <div class="all">
        <!-- header -->
    <div class="ecommerce-header">
        <div class="div1 E-color"></div>
        <div class="div2 E-color"></div>
       
    </div>

     <!-- hero -->
      <div class="E-hero">
        <div class="left">
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
        <div class="right E-color"></div>
      </div>

      <!-- sponcers -->
   

    <div class=" sponcer_margin">
        <div class="div1 E-color"></div>
        <div class="div1 E-color"></div>
        <div class="div1 E-color"></div>
       
       
    </div>

    <!-- cols -->
    <div class="E-hero">
        <div class="left">
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
        <div class="right right_cols">
            <div class="col">
                <div class="middle"></div>
                <ul class="ul_col">
                    <li class="li_col1"></li>
                    <li class="li_col2"></li>
                    <li class="li_col3"></li>
                </ul>
            </div>
            <div class="col">
                <div class="middle"></div>
                <ul class="ul_col">
                    <li class="li_col1"></li>
                    <li class="li_col2"></li>
                    <li class="li_col3"></li>
                </ul>
            </div>
            <div class="col">
                <div class="middle"></div>
                <ul class="ul_col">
                    <li class="li_col1"></li>
                    <li class="li_col2"></li>
                    <li class="li_col3"></li>
                </ul>
            </div>
           

           
            
        </div>
    
         
      </div>

      <ul class="left_side_ul" style="    max-width: min(90%, 1300px);     margin: auto; padding: 20px;">
        <li class="li_color " style="padding:20px;"></li>
        <li class="li_color width2" style="padding:20px;"></li>
        <li class="li_color width1"  style="padding:20px;"></li>
        <li class="li_color width"  style="padding:70px;"></li>
       
     


      </ul>

</div>
      `;
      if (color == "black") {
         ecommerce_container.style.background='#000'
         ecommerce_container.querySelector('.all').style.background='#000'
       }
 
      // return dashbord_container;
      return ecommerce_container;
     
}
