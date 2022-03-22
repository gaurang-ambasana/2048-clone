import express from "express";

const PORT = process.env.PORT || 3000;
const server = express();

const staticData = express.static("./");
server.use(staticData);

server.get("/", (req, res) => {
  res.sendFile("./index.html");
  res.end();
});

server.listen(PORT, () => console.log(`listening at ${PORT}`));
