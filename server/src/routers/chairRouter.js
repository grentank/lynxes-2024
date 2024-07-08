const { Router } = require('express');
const { Chair } = require('../../db/models');

const chairRouter = Router();

chairRouter
  .route('/')
  .get(async (req, res) => res.json(await Chair.findAll()))
  .post(async (req, res) => {
    const newChair = await Chair.create(req.body);
    res.status(201).json(newChair);
  });

chairRouter.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await Chair.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = chairRouter;
