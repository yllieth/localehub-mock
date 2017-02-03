var express = require('express');
var router = express.Router();

var projects = [
  {
    id: "2f45df8b-1b25-43cc-9afc-4b2a2b59afc8",
    name: "localehub-test",
    lastActiveBranch: "gh-test",
    availableBranches: ["master", "gh-test"],
    i18nFiles: [
      { repo: "yllieth/localehub-test", path: "locales/en-US.json", languageCode: "en-US", format: "json", count: 29, branch: "gh-test" },
      { repo: "yllieth/localehub-test", path: "locales/pl.json",    languageCode: "pl",    format: "json", count: 26, branch: "gh-test" },
      { repo: "yllieth/localehub-test", path: "locales/zh-TW.json", languageCode: "zh-TW", format: "json", count: 26, branch: "gh-test" }
    ],
    repository: {
      id: 80665960,
      name: "localehub-test",
      fullName: "yllieth/localehub-test",
      description: "Test repository for localehub application",
      fork: false,
      private: false,
      owner: {
        id: 1174557,
        login: "yllieth",
        url: "https://github.com/yllieth",
        avatar_url: "https://avatars.githubusercontent.com/u/1174557?v=3",
        events_url: "https://api.github.com/users/yllieth/events{/privacy}",
        repos_url: "https://api.github.com/users/yllieth/repos",
        is_organization: false
      }
    },
    createdBy: {
      id: 1174557,
      login: "yllieth",
      description: "Frontend developer, passionated about web design, AngularJS lover. Having a beautiful life is easy: a motivating project, a whiteboard, and a laptop",
      url: "https://github.com/yllieth",
      avatar_url: "https://avatars.githubusercontent.com/u/1174557?v=3",
      events_url: "https://api.github.com/users/yllieth/events{/privacy}",
      repos_url: "https://api.github.com/users/yllieth/repos",
      is_organization: false
    }
  }
];

// GET /projects/
router.get('/', function(req, res) {
  res.status(200).json(projects)
});

// GET /projects/:id
router.get('/:projectId', function(req, res) {
  var project = projects[0];
  project.id = req.params.projectId;

  res.status(200).json(project);
});

module.exports = router;