let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const filterFavorites = myFavorites.filter(
    (character) => character.id !== Number(id)
  );
  myFavorites = filterFavorites;
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
