const { Sequelize } = require("sequelize");
const Phrase = require("../models/Phrase");

const createPhrases = async (req, res) => {
  try {
    let { author, txt } = req.body;
    let newPhrase = await Phrase.create({
      author,
      txt,
    });
    res.status(201).json({ id: newPhrase.id, author, txt });
  } catch (error) {
    console.error("Erro ao criar frase:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const listPhrases = async (req, res) => {
  try {
    let list = await Phrase.findAll();
    res.json({ list });
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const getPhrase = async (req, res) => {
  const { id } = req.params;
  try {
    let phrase = await Phrase.findByPk(id);
    if (phrase) {
      res.status(200).json({ phrase });
    } else {
      res.status(404).json({ error: "Frase não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const updatePhrase = async (req, res) => {
  const { id } = req.params;
  const { author, txt } = req.body;
  try {
    let phrase = await Phrase.findByPk(id);
    if (phrase) {
      phrase.author = author;
      phrase.txt = txt;
      await phrase.save();
      res.json({ phrase });
    } else {
      res.status(404).json({ error: "Frase não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const deletePhrase = async (req, res) => {
  const { id } = req.params;
  try {
    const phrase = await Phrase.findByPk(id);
    if (phrase) {
      await phrase.destroy();
      res.status(200).json({ message: "Frase deletada" });
    } else {
      res.status(404).json({ error: "Frase não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const randomPhrase = async (req, res) => {
  let phrase = await Phrase.findOne({
    order: [Sequelize.fn("RAND")],
  });
  try {
    if (phrase) {
      res.json({ phrase });
    } else {
      res.status(404).json({ error: "Frase não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// const randomPhrase = async (req, res) => {
//   try {
//     const count = await Phrase.count();
//     const randomIndex = Math.floor(Math.random() * count);
//     const randomPhrase = await Phrase.findOne({
//       offset: randomIndex,
//     });

//     if (randomPhrase) {
//       res.json({ phrase: randomPhrase });
//     } else {
//       res.status(404).json({ error: "Nenhuma frase encontrada" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Erro interno do servidor" });
//   }
// };

module.exports = {
  createPhrases,
  listPhrases,
  getPhrase,
  updatePhrase,
  deletePhrase,
  randomPhrase,
};
