
const connection = require('../config/db');






 const find =(id) => {
    return connection.query("select * from  kingdom where id = ?", [
      id,
    ]);
  }

  const findAll =()=> {
    return connection.query("select * from  kingdom");
  }

  /* const delete =(id)=> {
    return this.connection.query("delete from kingdom where id = ?", [
      id,
    ]);
  } */




module.exports = {
find,
findAll,



};
