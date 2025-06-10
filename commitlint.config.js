// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/commitlint.config.js

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Feat',      // New feature
        'Fix',       // Bug fix
        'Docs',      // Documentation
        'Style',     // Formatting, missing semi colons, etc
        'Refactor',  // Code change that neither fixes a bug nor adds a feature
        'Test',      // Adding missing tests
        'Chore',     // Maintain. Changes to the build process or auxiliary tools
        'Perf',      // Performance improvements
        'Ci',        // CI/CD changes
        'Build',     // Build system changes
        'Revert'     // Revert previous commit
      ]
    ],
    'type-case': [2, 'always', 'pascal-case'],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-min-length': [2, 'always', 10],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100]
  },
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint'
} 