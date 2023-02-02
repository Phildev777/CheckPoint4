const express = require("express");

const router = express.Router();

const ConsoleControllers = require("../controllers/ConsolesControllers");

router.get("/", ConsoleControllers.browse);
router.get("/:idConsoles", ConsoleControllers.read);
router.put("/:idConsoles", ConsoleControllers.edit);
router.post("/", ConsoleControllers.add);
router.delete("/:idConsoles", ConsoleControllers.destroy);
//router.post("/items/login", itemControllers.login);


module.exports = router;