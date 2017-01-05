var express = require('express');
var router = express.Router();

var projects = [
  {
    "availableBranches": ["tp-branch1", "master", "pu-20161002"],
    "name": "project 3",
    "lastActiveBranch": "master",
    "user": "https://api.github.com/users/yllieth",
    "owner": "https://api.github.com/users/yllieth",
    "id": "57a889ab510b2ce22daeee41fb8d0872"
  }, {
    "availableBranches": ["tp-branch1", "master", "pu-20161002"],
    "name": "project 5",
    "lastActiveBranch": "master",
    "user": "https://api.github.com/users/yllieth",
    "owner": "https://api.github.com/orgs/Predicsis",
    "id": "d3e2ed9abd94a182460f18afc54119ed"
  }, {
    "availableBranches": ["tp-branch1", "master", "pu-20161002"],
    "name": "project 4",
    "lastActiveBranch": "master",
    "user": "https://api.github.com/users/yllieth",
    "owner": "https://api.github.com/users/yllieth",
    "id": "8c1679bf94315ee1c76042090bc4a56c"
  }, {
    "availableBranches": ["tp-branch1", "master", "pu-20161002"],
    "name": "other project with a very long name",
    "lastActiveBranch": "master",
    "user": "https://api.github.com/users/yllieth",
    "owner": "https://api.github.com/users/yllieth",
    "id": "6d048f104b391670baab330204c2b350"
  }, {
    "availableBranches": ["tp-branch1", "master", "pu-20161002"],
    "name": "github-dashboard",
    "lastActiveBranch": "master",
    "user": "https://api.github.com/users/yllieth",
    "owner": "https://api.github.com/users/yllieth",
    "id": "d41d8cd98f00b204e9800998ecf8427e"
  }
];

// GET /projects/
router.get('/', function(req, res) {
  res.status(200).json(projects)
});

// GET /projects/:owner/:repo
router.get('/:owner/:repo', function(req, res) {
  var owner = req.params.owner;
  var repo = req.params.repo;

  var candidates = projects.filter(function(project) {
    return project.user.indexOf(owner) >= 0 && project.name === repo;
  });

  if (candidates.length === 0) { res.status(404).json({message: 'Unknown project ' + owner + '/' + repo}); }
  else if (candidates.length > 1) { res.status(409).json({message: 'Several projects ' + owner + '/' + repo + ' found'}); }
  else { res.status(200).json(candidates[0]); }
});

module.exports = router;