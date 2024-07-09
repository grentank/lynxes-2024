const { Router } = require('express');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');
const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../configs/cookiesConfig');

const tokensRouter = Router();

tokensRouter.get('/refresh', verifyRefreshToken, async (req, res) => {
  const { user } = res.locals;
  const { accessToken, refreshToken } = generateTokens({ user });
  setTimeout(() => {
    res.cookie('refreshToken', refreshToken, cookiesConfig).json({ user, accessToken });
  }, 1000);
});

module.exports = tokensRouter;
