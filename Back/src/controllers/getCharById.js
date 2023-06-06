const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (id) => {
  const apiResponse = await axios(`${URL}${id}`);
  const { name, image, status, species, location, origin, type } =
    apiResponse.data;
  const originName = origin.name;
  const locationName = location.name;
  return { name, image, status, species, locationName, originName, type };
};

module.exports = getCharById;
