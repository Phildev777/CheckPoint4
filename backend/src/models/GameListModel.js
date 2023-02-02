
const connection = require('../config/db');

//const bcrypt = require("bcrypt");
//require("dotenv").config();



 const find =(idGames) => {
    return connection.query("select * from games  where idGames = ?", [
      idGames,
    ]);
  }

  const findAll =()=> {
    return connection.query("select * from  games_has_maliste");
  }

   const del =(idGames)=> {
    return connection.query("delete from games where idGames = ?", [
      idGames,
    ]);
  } 




  const create = async (
    Games_idGames,
    MaListe_idMaListe

  ) => {
    try {
     /*  const hashedMotdepasse = await bcrypt.hashSync(
        motdepasse,
        process.env.SALT
      ); */
      const [result] = await connection.query(
        "INSERT INTO games_has_maliste (Games_idGames, MaListe_idMaListe) VALUES (( SELECT idGames FROM games WHERE idGames=? ),(SELECT idMaListe FROM MaListe WHERE idMaListe=?))",

        [
            Games_idGames,
            MaListe_idMaListe,
        
        
         
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

  const editor = (Games_idGames, MaListe_idMaListe,idMaListe) => {
    return connection.query("UPDATE games_has_maliste SET Games_idGames=?, MaListe_idMaListe=? WHERE idMaListe=?", [
    Games_idGames,
    MaListe_idMaListe,
    
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
