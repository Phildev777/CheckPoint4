const express = require("express");

const router = express.Router();

const MaListControllers = require("../controllers/MaListeControllers");

router.get("/", MaListControllers.browse);
router.get("/:idMaListe", MaListControllers.read);
router.put("/:idMaListe", MaListControllers.edit);
router.post("/", MaListControllers.add);
router.delete("/:idMaListe", MaListControllers.destroy);
//router.post("/items/login", itemControllers.login);





module.exports = router;