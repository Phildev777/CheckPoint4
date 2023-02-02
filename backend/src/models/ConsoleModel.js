
const connection = require('../config/db');





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
    imgC,
    Makers_idMakers,  
    Years_idYears,
    
    

  ) => {
    try {
   
      const [result] = await connection.query(
        "INSERT INTO consoles ( denomination, imgC, Makers_idMakers, Years_idYears) VALUES (?,?,?,?)",
        [
          denomination,
          imgC,
          Makers_idMakers,
          Years_idYears,
         
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

  const editor = (denomination,imgC, Makers_idMakers, Years_idYears,idConsoles) => {
    return connection.query("UPDATE consoles SET denomination=?, imgC=?,Makers_idMakers=?,Years_idYears=? WHERE idConsoles=?", [
      denomination,
      imgC,
      Makers_idMakers,
      Years_idYears,
      idConsoles,
    ]);
  };





module.exports = {
find,
findAll,
del,
create,
editor,


};
