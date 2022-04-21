import React from "react";
import images from "../Assets/note11.jpg";
export default function MYSection(Props)
{
return(
<section>
    <ul className="ListMob">
      <li>
          <div class="Card">
            <div class="Disp">
                  <img class="myImage" src={images} alt="No internet" />
                         <div class="Mob-Name" >
                             Note 11 Pro
                         </div>
            </div>
           <div class="Speace">
           <div>Display : {Props.Disp }</div>
           <div>Camera : {Props.Cam } </div>
           <div>Processor : {Props.Cpu} </div>
           <div>Battary : {Props.Battary} </div>
           <div>Price : {Props.Price} </div>
           </div>
           </div>
        </li>
       
    </ul>
</section>
);

}