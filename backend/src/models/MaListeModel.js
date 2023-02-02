
const connection = require('../config/db');

//const bcrypt = require("bcrypt");
//require("dotenv").config();



 const find =(idMaListe) => {
    return connection.query("select * from MaListe  where idMaListe = ?", [
      idMaListe,
    ]);
  }

  const findAll =()=> {
    return connection.query("select * from  MaListe");
  }

   const del =(idMaListe)=> {
    return connection.query("delete from MaListe where idMaListe = ?", [
      idMaListe,
    ]);
  } 




  const create = async (
    
    NmListe,

  ) => {
    try {
     /*  const hashedMotdepasse = await bcrypt.hashSync(
        motdepasse,
        process.env.SALT
      ); */
      const [result] = await connection.query(
        "INSERT INTO MaListe ( NmListe) VALUES (?)",
        [
            
          NmListe,
         
        ]
      );
  
      if (result.affectedRows > 0) {
        return "Created";
      }
      return "Not created";
    } catch (e) {
      console.error(e);
      return `Erreur : ${e}`;
    }
  };

  const editor = (NmListe,idMaListe) => {
    return connection.query("UPDATE maListe SET NmListe=? WHERE idMaListe=?", [
      
      NmListe,
      idMaListe,
    ]);
  };


/*   const login = async (nom, motdepasse) => {
    try {
      const hashedMotdepasse = await bcrypt.hashSync(
        motdepasse,
        process.env.SALT
      );
      const [result] = await connection.query(
        "SELECT * FROM table WHERE nom=? AND motdepasse=?",
        [nom, hashedMotdepasse]
      );
  
      if (result.length > 0) {
        return result[0];
      }
      return "Utilisateur non trouvé";
    } catch (e) {
      console.error(e);
      return e;
    }
  }; */



module.exports = {
find,
findAll,
del,
create,
editor,
//login,

};
