const { Router } = require('express');
const { Chair } = require('../../db/models');
const { setTimeout } = require('timers/promises');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const checkChairOwner = require('../middlewares/checkChairOwner');

const chairRouter = Router();

chairRouter
  .route('/')
  .get(async (req, res) => {
    await setTimeout(2000);
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

chairRouter
  .route('/:chairId')
  .delete(verifyAccessToken, checkChairOwner, async (req, res) => {
    const { chairId } = req.params;
    await Chair.destroy({ where: { id: chairId } });
    res.sendStatus(204);
  });

module.exports = chairRouter;
