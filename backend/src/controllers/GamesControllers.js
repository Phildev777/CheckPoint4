const GamesModel = require("../models/GameModel");
//const jwt = require("jsonwebtoken");
//require("dotenv").config();

const browse = async (req, res) => {
 
 try{

  const [result] = await GamesModel.findAll()

return res.status(200).send(result);


}
catch(err){
  console.error(err);

  return res.status(500).send("problem");
}

 
  
};


const read= async (req, res)=> {

  try {
    const [result] = await GamesModel.find(req.params.idGames)//params fait référence aux : dans les routes


    return res.status(200).send(result);



} catch (err) {

    console.error(err)
    return res.status(500).send("problème")

}




}



const edit = async (req, res) => {


  try {

      const { Name,imgG, Consoles_idConsoles, Years_idYears,idGames  } = req.body;

      const [ result ] = await GamesModel.editor(Name, imgG,Consoles_idConsoles, Years_idYears,idGames);
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
    name,
   
  } = req.body;

  const result = await GamesModel.create(
    name,
  
  );

  if (result === "Created") {
    return res.status(201).send("Inscription effectuée");
  }
  if (result === "Not created") {
    return res.status(200).send("Employé déjà inscrit");
  }

  return res.status(500).send("Something broke");
};





const destroy =async (req, res) => {

  try {


    const [ result ] = await GamesModel.del(req.params.idGames)

    if (result.affectedRows > 0) {
        return res.status(400).send("utilisateur supprimé");

    }

} catch (err) {

    console.error(err)
    return res.status(500).send("problème")

}
}

/* const login = async (req, res) => {
  try {
    const { nom, motdepasse } = req.body;
    const result = await utilisateurModel.login(nom, motdepasse);
    const token = jwt.sign({ user: result }, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });
    console.warn(result);
    result.token = token;

    delete result.motdepasse;
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
const getUserToken = (req, res) => {
  const { user } = jwt.verify(
    req.headers.authorization,
    process.env.TOKEN_SECRET
  );
  res.status(200).send(user);
}; */
  

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  //login,
};
