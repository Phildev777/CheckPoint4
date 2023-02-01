const express = require("express");

const router = express.Router();

const GameControllers = require("../controllers/GamesControllers");

router.get("/", GameControllers.browse);
router.get("/:idGames", GameControllers.read);
router.put("/:idGames", GameControllers.edit);
router.post("/", GameControllers.add);
router.delete("/:idGames", GameControllers.destroy);
//router.post("/items/login", itemControllers.login);





module.exports = router;
