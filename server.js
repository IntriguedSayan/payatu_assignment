// server.js
const express = require("express");
const cors = require("cors");
const routerRoutes = require("./routes/routerRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/router", routerRoutes);

app.get("/api", (req, res) => {
  return res.status(200).json({ message: "WELCOME" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
