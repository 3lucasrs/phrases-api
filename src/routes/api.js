const { Router } = require("express");

const {
  createPhrases,
  listPhrases,
  getPhrase,
  updatePhrase,
  deletePhrase,
  randomPhrase,
} = require("../controllers/apiController");

const router = Router();

router.post("/frases", createPhrases);
router.get("/frases", listPhrases);
router.get("/frase/aleatoria", randomPhrase);
router.get("/frase/:id", getPhrase);
router.put("/frase/:id", updatePhrase);
router.delete("/frase/:id", deletePhrase);

module.exports = router;
