const { Router } = require('express');
const { Chair } = require('../../db/models');
const { Op } = require('sequelize');
const { setTimeout } = require('timers/promises');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const checkChairOwner = require('../middlewares/checkChairOwner');

const chairRouter = Router();

chairRouter
  .route('/')
  .get(async (req, res) => {
    res.json(await Chair.findAll());
  })
  .post(verifyAccessToken, async (req, res) => {
    const newChair = await Chair.create({
      ...req.body,
      ownerId: res.locals.user.id,
    });
    res.status(201).json(newChair);
  });

chairRouter.get('/my', verifyAccessToken, async (req, res) => {
  const myChairs = await Chair.findAll({ where: { ownerId: res.locals.user.id } });
  res.json(myChairs);
});

chairRouter.get('/search', async (req, res) => {
  const { name } = req.query;
  const searchResult = await Chair.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  res.json(searchResult);
});

chairRouter
  .route('/:chairId')
  .delete(verifyAccessToken, checkChairOwner, async (req, res) => {
    const { chairId } = req.params;
    await Chair.destroy({ where: { id: chairId } });
    res.sendStatus(204);
  })
  .get(async (req, res) => {
    const { chairId } = req.params;
    await setTimeout(Number(chairId) * 1000);
    const chair = await Chair.findByPk(chairId);
    res.json(chair);
  })
  .patch(verifyAccessToken, checkChairOwner, async (req, res) => {
    const { chairId } = req.params;
    await Chair.update(req.body, { where: { id: chairId } });
    res.sendStatus(200);
  });

module.exports = chairRouter;
