import React from "react";
import{NavLink} from"react-router-dom";
import"../assets/styles/home.css";
import TestDragAndDrop from "../components/TestDragAndDrop";

export default function Home() {
  return (
    <div>
    
<div className="Hom">
<NavLink  to="/consoles" className="Nav"><h1 className="TitreH"> Et Toi à quoi tu joues ?</h1></NavLink>
<TestDragAndDrop/>

</div>
</div>


  );
}
