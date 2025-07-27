
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// 👉 Sert le dossier 'public' statiquement (pour preview_max.jpg, CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// 👉 Route racine renvoyant index.html depuis 'views'
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// ✅ Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
