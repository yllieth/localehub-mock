var express = require('express');
var router = express.Router();

var user = {
  id: 1174557,
  login: "yllieth",
  full_name: "Sylvain RAGOT",
  description: "Frontend developer, passionated about web design, AngularJS lover. Having a beautiful life is easy: a motivating project, a whiteboard, and a laptop",
  url: "https://github.com/yllieth",
  avatar_url: "https://avatars.githubusercontent.com/u/1174557?v=3",
  events_url: "https://api.github.com/users/yllieth/events{/privacy}",
  repos_url: "https://api.github.com/users/yllieth/repos",
  is_organization: false
};

// GET /translations/:owner/:repo
router.get('/', function(req, res) {
  res.status(200).json(user);
});

module.exports = router;