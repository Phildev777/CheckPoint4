const MListeModel = require("../models/MaListeModel");
//const jwt = require("jsonwebtoken");
//require("dotenv").config();

const browse = async (req, res) => {
 
 try{

  const [result] = await MListeModel.findAll()

return res.status(200).send(result);


}
catch(err){
  console.error(err);

  return res.status(500).send("problem");
}

 
  
};


const read= async (req, res)=> {

  try {
    const [result] = await MListeModel.find(req.params.idMaListe)//params fait référence aux : dans les routes


    return res.status(200).send(result);



} catch (err) {

    console.error(err)
    return res.status(500).send("problème")

}




}

/* const edit = (req, res) => {
  const item = req.body;

  // TODO validations (length, format...)

  item.id = parseInt(req.params.id, 10);

  models.item
    .update(item)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
}; */


const edit = async (req, res) => {

  try {

      const { NmListe } = req.body;
      const [ result ] = await ConsolesModel.editor(NmListe);

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
   NmListe
  } = req.body;

  const result = await MListeModel.create(
        NmListe,
  
  );

  if (result === "Created") {
    return res.status(201).send("Liste crée");

  }
  if (result === "Not created") {
    return res.status(200).send("Liste déjà existante");

  }

  return res.status(500).send("Something broke");
};





const destroy =async (req, res) => {

  try {


    const [ result ] = await MListeModel.del(req.params.idConsoles)

    if (result.affectedRows > 0) {
        return res.status(400).send("Liste supprimée");

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
