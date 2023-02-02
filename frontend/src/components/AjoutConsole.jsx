import React, {useState, useEffect} from 'react';
import axios from 'axios';
import"../assets/styles/ajoutconsol.css";

const Modal = ({show, onClose}) => {
  
    const [showModal, setShowModal] = useState(show);
    
    useEffect(()=>{
    
    setShowModal(show);
    
    },[show]);
    
    
    return (
      showModal && (
    <div> 
    <div className="pop">
    <p className="txtPop">Console Enregistrée</p>
    <button onClick={()=> onClose(false)} className="BtnPop">Fermer</button>
    </div>
    </div>
    )
    );
      }; 
      
const AjoutConsole = () => {    

    const [denomination, setDenomination] = useState('');
const [imgC,setImgC] = useState('');
const[Makers_idMakers, setMakers_idMakers] = useState('');
const[Years_idYears, setYears_idYears] = useState('');
const [modalShow, setModalShow] = useState(false);

const handleConsol = (e) => {
e.preventDefault();

axios.post("http://localhost:5000/api/console",{

denomination,
imgC,
Makers_idMakers,
Years_idYears,



})


.then((res)=>{
console.log(res.data)
})

.catch((err)=>{
console.log(err);

});



};

    return (
        <div className="pageAjout">
            <div>
               
                <h3 className="TitreAj">Ajouter une console</h3>

            </div>
            <div className="Pop">

            <Modal show={modalShow} onClose={setModalShow} />

            </div>

            <div>
            <form onSubmit={handleConsol}>
            <ul>
              <div className="formIns">
                <li>
                  <label className="textIn">Nom de la console : </label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder="nom"
                    value={denomination}
                    onChange={(e) => setDenomination(e.target.value)}
                  />
                  </li>
                  <li>
                       <label className="textIn">Image : </label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder=""
                    value={imgC}
                    onChange={(e) => setImgC(e.target.value)}
                  />
                </li>
                <li>
                  <label className="textIn">N°Fabricant : </label>
                  <input
                    className="inputTxtIn"
                    type="number"
                    placeholder="fabricant"

                    value={Makers_idMakers}
                    onChange={(e) => setMakers_idMakers(e.target.value)}
                  />
                   <select className="inputTxtIn">
                  <option value="Nintendo">1- Nintendo</option>
                  <option value ="Sony">2- Sony</option>
                  <option value ="Microsoft">3- Microsoft</option>
                  <option value = "SEGA">4- SEGA</option>
               
                  </select>
                </li>
                <li>
                  <label className="textIn">Année : </label>
                  <input
                    className="inputTxtIn"
                    type="number"
                    placeholder="année"
                    value={Years_idYears}
                    onChange={(e) => setYears_idYears(e.target.value)}
                  />
                     <select className="inputTxtIn">
                  <option value="1980">1- 1980</option>
                  <option value ="1990">2- 1990</option>
                  <option value ="2000">3- 2000</option>
                  <option value = "2010">4- 2010</option>
                  <option value = "2020">5- 2020</option>
               
                  </select>
                </li>

            </div>
            
            <li>
                <button type="submit" className="BtnIns">
                  Ajouter
                </button>
              </li>
            </ul>
            
            </form>
            </div>
        </div>
    );
};

export default AjoutConsole;