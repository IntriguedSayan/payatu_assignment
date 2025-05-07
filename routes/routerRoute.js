// routes/routerRoutes.js
const express = require("express");
const router = express.Router();
const routerController = require("../controllers/routerController");

router.post("/interrogate", routerController.interrogateRouter);
router.post("/action", routerController.performRouterAction);

module.exports = router;
