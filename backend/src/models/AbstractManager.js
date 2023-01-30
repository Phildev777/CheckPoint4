
const connection = require('../config/db');

//const bcrypt = require("bcrypt");
//require("dotenv").config();



 const find =(id) => {
    return connection.query("select * from  kingdom where id = ?", [
      id,
    ]);
  }

  const findAll =()=> {
    return connection.query("select * from  kingdom");
  }

   const del =(id)=> {
    return connection.query("delete from kingdom where id = ?", [
      id,
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
        "INSERT INTO kingdom ( name) VALUES (?)",
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

  const editor = (id,name) => {
    return connection.query("UPDATE kingdom SET name=? WHERE id=?", [
      name,
      id
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
