
export const body = (color) => {
    const common_container =document.createElement('div')
    common_container.classList.add('common_container')

    const container_skeleton =document.createElement('div')
    container_skeleton.classList.add('container_skeleton')

    container_skeleton.innerHTML=`
        
        <header class="header"></header>

    
        <div class="hero"></div>

      
        <div class="cols">
            <!-- cil1 -->
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

      
         <div class="middle_col">
            <ul class="ul_col">
                <li class="li_col1 middle_col_li"></li>
                <li class="li_col1 middle_col_li"></li>
                <li class="li_col2 middle_col_li"></li>
                <li class="li_col3 middle_col_li"></li>
                <li class="li_col2 middle_col_li"></li>
            </ul>
            <div class="middle"></div>

         </div>

       
         <ul class="ul_col">
            <li class="li_col1 middle_col_li"></li>
            <li class="li_col3 middle_col_li"></li>
            <li class="li_col1 middle_col_li"></li>
            <li class="li_col1 middle_col_l2"></li>
        </ul>
    `

      if(color == 'black'){
        common_container.style.background='#000'
        container_skeleton.style.background='#000'
      }
    common_container.appendChild(container_skeleton)
    return common_container;

}
