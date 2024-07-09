const { Chair } = require('../../db/models');

async function checkChairOwner(req, res, next) {
  const { chairId } = req.params;
  const targetChair = await Chair.findByPk(chairId);
  if (targetChair.ownerId === res.locals.user.id) return next();
  return res.status(403).json({ message: 'Ошибка доступа' });
}

module.exports = checkChairOwner;
