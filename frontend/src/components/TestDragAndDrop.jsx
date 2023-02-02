import React from 'react';
import Draggable from 'react-draggable';
import gameboy from "../assets/gameboy.png";
import epeeMC from "../assets/epeeMC.png";
import clashRoyal from "../assets/clashRoyal.png";
import manette from "../assets/manette.png";
import ManetteSwitch from "../assets/ManetteSwitch.png";

const TestDragAndDrop = () => {
    return (
   <div>
        <Draggable>
<img src={gameboy} alt="Drag"/>
</Draggable>
<Draggable>


<img src={epeeMC} alt="Drag"/>
</Draggable>
<Draggable>


<img src={clashRoyal} alt="Drag"/>
</Draggable>
<Draggable>


<img src={manette} alt="Drag"/>
</Draggable>
<Draggable>


<img src={ManetteSwitch} alt="Drag"/>
</Draggable>
</div>


    );
};

export default TestDragAndDrop;