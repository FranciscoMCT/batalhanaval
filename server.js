const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

let enemyShips = new Set([12, 13, 14, 25, 26, 27, 50, 51, 52, 53]); // posições fixas

app.use(express.static(path.join(__dirname, "public")));

app.get("/attack/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const hit = enemyShips.has(index);
  if (hit) enemyShips.delete(index);
  res.json({ hit });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
