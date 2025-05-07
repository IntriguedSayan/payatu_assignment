// controllers/routerController.js
const {
    getRouterMetadata,
    performRouterAction,
  } = require("../services/routerService");
  
  exports.interrogateRouter = async (req, res) => {
    try {
      const metadata = await getRouterMetadata(req.body);
      res.status(200).json(metadata);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.performRouterAction = async (req, res) => {
    try {
      const result = await performRouterAction(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  