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
var translations_en = {
  "resources": "Resources",
  "resource": "Resource",
  "description": "Description",
  "errs": {
    "no_docs_found": "No documentation found",
    "no_docs_found_descr": "We have not found any documentation for your API.",
    "follow_instructions_html": "Follow %{href} on how to describe your controllers.",
    "follow_instructions_href": "further instructions",
    "oops": "Oops!!",
    "resource_not_found_html": "Resource %{resource} not found.",
    "method_not_found_html": "Method %{method} not found for resource %{resource}."
  },
  "goto_homepage_html": "Try going to %{href}",
  "goto_homepage_href": "%{app_name} API documentation homepage",
  "status": {
    "required": "required",
    "optional": "optional",
    "nil_allowed": "nil allowed"
  },
  "param_name": "Param name",
  "params": "Params",
  "examples": "Examples",
  "metadata": "Metadata",
  "errors": "Errors",
  "error_code": "Code",
  "error_description": "Description",
  "error_metadata": "Metadata",
  "supported_formats": "Supported Formats",
  "enable_javascript_html": "Please enable JavaScript to view the %{comments_href}.",
  "documentation": {
    "comments_powered_by_disqus": "comments powered by %{disqus}",
    "api_documentation": "API documentation",
    "headers": "Headers",
    "header_name": "Header name"
  }
};
var translations_pl = {
  "resources": "Zasoby",
  "resource": "Zasób",
  "description": "Opis",
  "errs": {
    "no_docs_found": "Nie znalezionio dokumentacji",
    "no_docs_found_descr": "Nie znaleziono dokumentacji dla twojego API.",
    "follow_instructions_html": "Przejdź do %{href} aby opisać swoje kontrolery.",
    "follow_instructions_href": "dalsze instrukcje",
    "oops": "Ups!!",
    "resource_not_found_html": "Zasób %{resource} nie został znaleziony.",
    "method_not_found_html": "Metoda %{method} dla zasobu %{resource} nie została znaleziona."
  },
  "goto_homepage_html": "Spróbuj przejść do %{href}",
  "goto_homepage_href": "%{app_name} Strona główna dokumentacji API",
  "status": {
    "required": "wymagany",
    "optional": "opcjonalny",
    "nil_allowed": "nil dopuszczalny"
  },
  "param_name": "Nazwa parametru",
  "params": "Parametry",
  "examples": "Przykłady",
  "metadata": "Metadane",
  "errors": "Błędy",
  "supported_formats": "Dostępne formaty",
  "enable_javascript_html": "Proszę włączyć obsługę JavaScript w celu zobaczenia %{comments_href}.",
  "documentation": {
    "comments_powered_by_disqus": "komentarze obsługiwane przez %{disqus}",
    "api_documentation": "Dokumentacja API",
    "headers": "Nagłówki",
    "header_name": "Nazwa nagłówka"
  }
};
var translations_zh = {
  "resources": "資源",
  "resource": "資源",
  "description": "描述",
  "errs": {
    "no_docs_found": "沒有找到文檔",
    "no_docs_found_descr": "沒有找到文檔。",
    "follow_instructions_html": "點擊 %{href} 查看描述。",
    "follow_instructions_href": "高級指導",
    "oops": "Oops!!",
    "resource_not_found_html": "沒有找到資源 %{resource} 。",
    "method_not_found_html": "沒有找到資源 %{resource} 的方法 %{method} 。"
  },
  "goto_homepage_html": "試圖訪問 %{href}",
  "goto_homepage_href": "%{app_name} API 文檔主頁",
  "status": {
    "required": "必填",
    "optional": "選填",
    "nil_allowed": "允許空值"
  },
  "param_name": "參數名字",
  "params": "參數",
  "examples": "示例",
  "metadata": "元數據",
  "errors": "錯誤",
  "supported_formats": "支持格式",
  "enable_javascript_html": "瀏覽 %{comments_href}前請允許執行 JavaScript 。",
  "documentation": {
    "comments_powered_by_disqus": "評論技術支持 %{disqus}",
    "api_documentation": "API 文檔",
    "headers": "頭部",
    "header_name": "頭部名字"
  }
};

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

// GET /projects/:id/translations
router.get('/:projectId/translations', function(req, res) {
  var languageCode = req.query.languageCode;
  var branch = req.query.branch;

  if (languageCode === 'en-US') { res.status(200).json(translations_en); }
  if (languageCode === 'pl')    { res.status(200).json(translations_pl); }
  if (languageCode === 'zh-TW') { res.status(200).json(translations_zh); }
});

module.exports = router;