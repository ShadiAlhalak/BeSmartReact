import React from "react";
import note11 from "../Assets/note11.jpg"; 
import S22 from "../Assets/s22.jpg"; 
export default function MobItem(Props)
{
return(
                     
    <li className="LiMob">
    <div class="Card">
      <div class="Disp">
            <img class="myImage" src={Props.img==="MI" ? note11: S22} alt="No internet" />
                   <div class="Mob-Name" >
                       {Props.Name}
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
);

}