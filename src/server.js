const express = require("express");
const cors = require("cors");
const path = require("path");
const apiRoutes = require("./routes/api");

const server = express();
server.use(cors());
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use("/api", apiRoutes);

server.use((req, res) => {
  res.status(404);
  res.json({ error: "Endpoint not found" });
});

server.listen(3001, () => console.log("Server running on port 3001"));
