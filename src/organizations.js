var express = require('express');
var router = express.Router();

var organizations = [
  {
    "is_organization": false,
    "avatar_url": "https://avatars.githubusercontent.com/u/1174557?v=3",
    "repos_url": "https://api.github.com/users/yllieth/repos",
    "description": "Sylvain RAGOT",
    "url": "https://api.github.com/users/yllieth",
    "login": "yllieth",
    "events_url": "https://api.github.com/users/yllieth/events{/privacy}",
    "id": 1174557
  }, {
    "description": "",
    "url": "https://api.github.com/orgs/PredicSis",
    "events_url": "https://api.github.com/orgs/PredicSis/events",
    "is_organization": true,
    "avatar_url": "https://avatars.githubusercontent.com/u/6170002?v=3",
    "repos_url": "https://api.github.com/orgs/PredicSis/repos",
    "login": "PredicSis",
    "id": 6170002
  }
];

// GET /organizations/
router.get('/', function(req, res) {
  res.status(200).json(organizations)
});

module.exports = router;