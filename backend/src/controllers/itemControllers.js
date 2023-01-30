const modelItem = require("../models/AbstractManager");
//const jwt = require("jsonwebtoken");
//require("dotenv").config();

const browse = async (req, res) => {
 
 try{

  const [result] = await modelItem.findAll()

return res.status(200).send(result);


}
catch(err){
  console.error(err);

  return res.status(500).send("problem");
}

 
  
};


const read= async (req, res)=> {

  try {
    const [result] = await modelItem.find(req.params.id)//params fait référence aux : dans les routes


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

      const { name } = req.body;
      const [ result ] = await modelItem.editor(name);
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

  const result = await modelItem.create(
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


    const [ result ] = await modelItem.del(req.params.id)

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
