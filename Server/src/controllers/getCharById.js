const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios(`${URL}${id}`);
    const data = response.data;

    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getCharById;
