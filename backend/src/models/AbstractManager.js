
const connection = require('../config/db');






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


module.exports = {
find,
findAll,
del,
create,
editor,
};
