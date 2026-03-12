const router = require("express").Router();

const controller = require("../controllers/server.controller");
const auth = require("../middleware/auth.middleware");

router.post("/",auth,controller.createServer);
router.get("/",auth,controller.getServers);

module.exports = router;