var express = require('express');
var router = express.Router();

var translations_en = {
  "ACTION": {
    "ACCOUNT": {
      "FORGOTPWD": "Forgotten password ?",
      "SIGNIN": "Log-in to your account",
      "SIGNUP": "Create a new account"
    },
    "APPLY_MODEL": "Deploy model",
    "BACK": "Back",
    "BROWSE": "Browse",
    "CANCEL": "Cancel",
    "DATASET": {
      "CONFIRM": {
        "REMOVE": "Delete",
        "TEXT": "This will permanently delete the file"
      },
      "DELETE": "Delete",
      "DOWNLOAD": "Download"
    }
  },
  "BREADCRUMB": {
    "CREATE_MODEL": "Create model",
    "INSPECT_MODEL": "Inspect model",
    "MODEL_DONE_TOOLTIP": "Your model is already created.",
    "SCORE": "Score",
    "VIEW_SCORES": "View scores"
  },
  "BRAND_NAME": "LocaleHub",
  "MISSING_FROM_FR": "lorem ipsum english"
};
var translations_fr = {
  "ACTION": {
    "ACCOUNT": {
      "FORGOTPWD": "Mot de passe oublié ?",
      "SIGNIN": "Connexion",
      "SIGNUP": "Inscription"
    },
    "APPLY_MODEL": "Exploiter le modèle",
    "BACK": "Précédent",
    "BROWSE": "Parcourir",
    "CANCEL": "Annuler",
    "DATASET": {
      "CONFIRM": {
        "REMOVE": "Supprimer",
        "TEXT": "Cela va supprimer le fichier définitivement"
      },
      "DELETE": "Supprimer",
      "DOWNLOAD": "Télécharger"
    }
  },
  "BREADCRUMB": {
    "CREATE_MODEL": "Nouveau modèle",
    "INSPECT_MODEL": "Explorer le modèle",
    "MODEL_DONE_TOOLTIP": "Ce modèle existe déjà",
    "SCORE": "Prédire",
    "VIEW_SCORES": "Voir les prédictions"
  },
  "BRAND_NAME": "LocaleHub",
  "MISSING_FROM_EN": "lorem ipsum français"
};
var translations_ja = {};

// GET /translations/:owner/:repo
router.get('/:owner/:repo', function(req, res) {
  var owner = req.params.owner;
  var repo = req.params.repo;

  res.status(200).json({
    'fr': translations_fr,
    'en-US': translations_en,
    'ja': translations_ja
  });
});

module.exports = router;