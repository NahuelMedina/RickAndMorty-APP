const express = require("express");
const routerIndex = express.Router();
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const postUser = require("../controllers/postUser");
//const { postFav, deleteFav } = require("../controllers/handleFavorites");

routerIndex.get("/character/:id", getCharById);
routerIndex.get("/login", login);
routerIndex.post("/login", postUser);
routerIndex.post("/fav", postFav);
routerIndex.delete("/fav/:id", deleteFav);

module.exports = routerIndex;
