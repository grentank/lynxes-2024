const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../configs/cookiesConfig');

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name)
    return res.status(400).json({ message: 'Заполни все поля' });

  const [newUser, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, hashpass: await bcrypt.hash(password, 10) },
  });

  if (!created)
    return res.status(400).json({ message: 'Такой пользователь уже существует' });

  const user = newUser.get();
  delete user.hashpass;
  delete user.createdAt;

  const { accessToken, refreshToken } = generateTokens({ user });
  res.cookie('refreshToken', refreshToken, cookiesConfig).json({ user, accessToken });
});

// login -> bcrypt.compare

authRouter.get('/logout', (req, res) => {
  res.clearCookie('refreshToken').sendStatus(200);
});

module.exports = authRouter;
