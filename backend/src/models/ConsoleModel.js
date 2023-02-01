
const connection = require('../config/db');

//const bcrypt = require("bcrypt");
//require("dotenv").config();



 const find =(idConsoles) => {
    return connection.query("select * from consoles  where idConsoles = ?", [
      idConsoles,
    ]);
  }

  const findAll =()=> {
    return connection.query("select * from  consoles");
  }

   const del =(idConsoles)=> {
    return connection.query("delete from consoles where idConsoles = ?", [
      idConsoles,
    ]);
  } 




  const create = async (
    denomination,
    

  ) => {
    try {
     /*  const hashedMotdepasse = await bcrypt.hashSync(
        motdepasse,
        process.env.SALT
      ); */
      const [result] = await connection.query(
        "INSERT INTO consoles ( denomination) VALUES (?)",
        [
          denomination,
         
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

  const editor = (idConsoles,denomination) => {
    return connection.query("UPDATE consoles SET denomination=? WHERE idConsoles=?", [
      denomination,
      idConsoles
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
