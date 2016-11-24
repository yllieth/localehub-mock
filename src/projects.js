var express = require('express');
var router = express.Router();

var projects = [
  {
    user: {
      avatarUrl: "https://avatars3.githubusercontent.com/u/1174557?v=3&s=466",
      profileUrl: "https://github.com/yllieth",
      pseudo: "yllieth",
      fullname: "Sylvain RAGOT",
      isOrganization: false
    },
    projects: [
      {
        owner: "yllieth",
        name: "github-dashboard",
        url: "",
        lastActiveBranch: "master",
        availableBranches: ["master", "tp-branch1", "pu-20161002"]
      }, {
        owner: "yllieth",
        name: "other project with a very long name",
        url: "",
        lastActiveBranch: "master",
        availableBranches: ["master", "tp-branch1", "pu-20161002"]
      }, {
        owner: "yllieth",
        name: "project 3",
        url: "",
        lastActiveBranch: "master",
        availableBranches: ["master", "tp-branch1", "pu-20161002"]
      }, {
        owner: "yllieth",
        name: "project4",
        url: "",
        lastActiveBranch: "master",
        availableBranches: ["master", "tp-branch1", "pu-20161002"]
      }, {
        owner: "yllieth",
        name: "project 5",
        url: "",
        lastActiveBranch: "master",
        availableBranches: ["master", "tp-branch1", "pu-20161002"]
      }
    ],
    expanded: true
  },
  {
    user: {
      avatarUrl: "https://avatars3.githubusercontent.com/u/6170002?v=3&s=200",
      profileUrl: "https://github.com/predicsis",
      fullname: "PredicSis",
      pseudo: null,
      isOrganization: true
    },
    projects: [],
    expanded: false
  },
  {
    user: {
      avatarUrl: "https://avatars2.githubusercontent.com/u/13524192?v=3&s=200",
      profileUrl: "https://github.com/coocoonhome",
      fullname: "Coocoonhome",
      pseudo: null,
      isOrganization: true
    },
    projects: [],
    expanded: false
  },
  {
    user: {
      avatarUrl: null,
      profileUrl: "https://github.com/localehub",
      fullname: "LocaleHub",
      pseudo: null,
      isOrganization: true
    },
    projects: [],
    expanded: false
  }
];

// GET /projects/
router.get('/', function(req, res) {
  res.status(200).json(projects)
});

// GET /projects/:owner/:repo
// router.get('/:owner/:repo', function(req, res) {
//
// });

module.exports = router;