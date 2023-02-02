import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Draggable from 'react-draggable';
import "../assets/styles/listdetesjeux.css";
import gb from "../assets/gb.jpg";

const ListeDeTesJeux = () => {

    const[data, setData] = useState([]);
    useEffect(()=>{
    const game = async ()=>{
    
        await axios.get("http://localhost:5000/api/games/")
        .then((res)=>{
    
    setData(res.data);
    
    })
    .catch((err)=>console.error(err));
    
        };
    game();
     
    },[])
    
    
    
        return (
            <div className="consolEnt">
            <div>

                <h4>Liste des jeux que tu déplacer dans le GameBoy et fais une capture d'écran pour garder ta liste : </h4>

                </div>    
    <div>
    
    <ul className="NavG">
    <div className="NavG">
    {data.map(item =>(
    
    <li
    key={item.id}
    className="list-group-item">
    <Draggable>
    <div className="NomG">{item.Name}</div>
    </Draggable>


   
    
        </li>
    
    
    ))}
    </div>
    </ul>

    <img src={gb} className="tab" alt="gb"/>
    </div>
    
    
    
            </div>
        );
    };

export default ListeDeTesJeux;