const getCharById = require("../controllers/getCharById");

const getCharacterHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await getCharById(id);
    res.status(200).json(results);
  } catch (error) {
    console.error("todo mal flaco", error);
    res.status(400).json({ error: "error al traer el personaje campeon" });
  }
};

module.exports = getCharacterHandler;
