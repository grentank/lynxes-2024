const { Router } = require('express');
const { Favorite } = require('../../db/models');
const favoritesRouter = Router();

favoritesRouter
  .route('/')
  .get(async (req, res) => {
    const favs = await Favorite.findAll();
    res.json(favs);
  })
  .post(async (req, res) => {
    const fav = await Favorite.create(req.body);
    res.json(fav);
  });

favoritesRouter.route('/multiple').post(async (req, res) => {
  const { ids } = req.body;
  const charIds = ids.split(',');
  const favs = await Favorite.bulkCreate(charIds.map((characterId) => ({ characterId })));
  res.json(favs);
});

module.exports = favoritesRouter;
