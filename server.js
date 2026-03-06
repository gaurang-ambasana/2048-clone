import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;
const server = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(express.static(__dirname));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(PORT, () => console.log(`listening at ${PORT}`));
