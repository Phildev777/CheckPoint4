
const connection = require('../config/db');

//const bcrypt = require("bcrypt");
//require("dotenv").config();



 const find =(idGames) => {
    return connection.query("select * from games  where idGames = ?", [
      idGames,
    ]);
  }

  const findAll =()=> {
    return connection.query("select * from  games");
  }

   const del =(idGames)=> {
    return connection.query("delete from games where idGames = ?", [
      idGames,
    ]);
  } 




  const create = async (
    name,

  ) => {
    try {
     /*  const hashedMotdepasse = await bcrypt.hashSync(
        motdepasse,
        process.env.SALT
      ); */
      const [result] = await connection.query(
        "INSERT INTO games ( Name) VALUES (?)",
        [
          name,
         
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

  const editor = (idGames,name) => {
    return connection.query("UPDATE games SET Name=? WHERE idGames=?", [
      name,
      idGames
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
