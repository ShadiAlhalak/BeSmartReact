import React from "react";
import LOGO from "../Assets/b.webp";
export default function MYHeader()
{
return(
<header className="Header">
    <img src={LOGO} className="clsLogo" alt="" width="62px" height="62px"  />
    <span className="Title" >Be Smart Team</span> 
    <input type="text" className="Search" />
    <input type="submit" className="BtnSearch" value="Search" />
</header>
);

}