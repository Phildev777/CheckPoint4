const ConsolesModel = require("../models/ConsoleModel");
//const jwt = require("jsonwebtoken");
//require("dotenv").config();

const browse = async (req, res) => {
 
 try{

  const [result] = await ConsolesModel.findAll()

return res.status(200).send(result);


}
catch(err){
  console.error(err);

  return res.status(500).send("problem");
}

 
  
};


const read= async (req, res)=> {

  try {
    const [result] = await ConsolesModel.find(req.params.idConsoles)//params fait référence aux : dans les routes


    return res.status(200).send(result);



} catch (err) {

    console.error(err)
    return res.status(500).send("problème")

}




}



const edit = async (req, res) => {

  try {

      const { denomination,imgC, Makers_idMakers, Years_idYears,idConsoles } = req.body;
      const [ result ] = await ConsolesModel.editor(denomination,imgC, Makers_idMakers, Years_idYears,idConsoles);
      if (result.affectedRows > 0) {
          return res.status(201).send(result);


      } else {
          return res.status(400).send("erreur")
      }

  } catch (err) {

      console.error(err)
      return res.status(500).send("problème")

  } 

}

const add = async (req, res) => {
  const {
    denomination,
    imgC,
    Makers_idMakers,
    Years_idYears,
   
  } = req.body;

  const result = await ConsolesModel.create(
    denomination,
    imgC,
    Makers_idMakers,
    Years_idYears,
  
  );

  if (result === "Created") {
    return res.status(201).send("Console ajoutée");
  }
  if (result === "Not created") {
    return res.status(200).send("Console déjà ajoutée");
  }

  return res.status(500).send("Something broke");
};





const destroy =async (req, res) => {

  try {


    const [ result ] = await ConsolesModel.del(req.params.idConsoles)

    if (result.affectedRows > 0) {
        return res.status(400).send("Console supprimée");

    }

} catch (err) {

    console.error(err)
    return res.status(500).send("problème")

}
}


  

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  //login,
};
