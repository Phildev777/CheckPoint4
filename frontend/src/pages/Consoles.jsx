import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


import "../assets/styles/consoles.css";

const Consoles = () => {

const[data, setData] = useState([]);
useEffect(()=>{
const Consol = async ()=>{

    await axios.get("http://localhost:5000/api/console/")
    .then((res)=>{

setData(res.data);

})
.catch((err)=>console.error(err));

    };
Consol();
 
},[])



    return (

<div className="consolEnt">
            <div>

<NavLink to="/ajoutConsole" className="Navi">Ajouter une console</NavLink>

            </div>
    <div>

        <ul>
<div className="map">
        {data.map(item =>(

        <li
            key={item.id}
            className="list-group-item">

            <h3 className="LConsol">{item.denomination}</h3>

            <img src={item.imgC} alt=""/>

        </li>

         ))}
  </div>
        </ul>

    </div>

</div>

    );
};

export default Consoles;