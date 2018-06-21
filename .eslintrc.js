module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types": [1, { "forbid": ["any"], "checkContextTypes": 0, "checkChildContextTypes": 0 }],
        "consistent-return": 0,
        "max-len": ["error", { "code": 150 }]
      },
      "env" : {
        "browser": true
      },
      "parser": "babel-eslint"
};