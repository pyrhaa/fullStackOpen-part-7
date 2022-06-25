const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (req, res) => {
  const users = await User.find({}).populate('blogs');
  res.json(users);
});

usersRouter.post('/', async (req, res) => {
  const { username, name, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({
      error: 'username must be unique'
    });
  }

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: 'username AND password are required' });
  }

  if (username.length < 3 || username === ' ') {
    return res
      .status(400)
      .json({ error: 'username must have at least 3 characters' });
  }

  if (password.length < 3 || password === ' ') {
    return res
      .status(400)
      .json({ error: 'password must have at least 3 characters' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash
  });

  const savedUser = await user.save();

  res.status(201).json(savedUser);
});

module.exports = usersRouter;
