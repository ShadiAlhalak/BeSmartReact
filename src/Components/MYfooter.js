import React from "react";
import LOGO from "../Assets/a.webp";

export default function MYfooter()
{
return(
<footer className="Footer">
    <img src={LOGO} className="FooterImage" alt="" width="100px" height="100px"  />
    
    <ul className="info">
       <div>Contact with us </div>
    <li>
    facebook\BeSmartTeam
    </li>
    <li>
    Instagram\BeSmartTeam
    </li>
    <li>
    YouTube\BeSmartTeam
    </li>
    </ul>

    <ul className="Services">
       <div>Our Services</div>
    <li>
    Mobile Development
    </li>
    <li>
    Web Development
    </li>
    <li>
    Desktop Development
    </li>
    </ul>
    
    <ul className="Mobile">
       <div>Brands </div>
    <li>
    Xiaomi
    </li>
    <li>
    Samsung
    </li>
    <li>
    Realme
    </li>
    <li>
    OnePlus
    </li>
    </ul>

 
 

</footer>
);

}