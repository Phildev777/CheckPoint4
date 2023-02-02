const express = require("express");

const router = express.Router();

const GamListControllers = require("../controllers/GameListControllers");

router.get("/", GamListControllers.browse);
router.get("/:idMaliste", GamListControllers.read);
router.put("/:idMaListe", GamListControllers.edit);
router.post("/", GamListControllers.add);
router.delete("/:idGames", GamListControllers.destroy);
//router.post("/items/login", itemControllers.login);





module.exports = router;