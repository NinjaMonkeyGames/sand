export default {
  branches: [
    "master",
    { "name": "develop", "prerelease": "beta" },
    { "name": "release", "prerelease": "rc" }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      { "changelogFile": "CHANGELOG.md" }
    ],
    [
      "@semantic-release/npm",
      { "npmPublish": false }
    ],
    [
      "@semantic-release/github",
      {
        "successCommentCondition": "false",
        "failCommentCondition": "false"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "CHANGELOG.md"],
        /* This message applies to develop, release, AND master.
           It includes [skip ci] so Commitlint (with the ignore rule) will bypass it.
        */
        "message": "chore(rebase): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}\n\nSigned-off-by: Daniel Mallett <daniel.mallett@ninjamonkeygames.com>"
      }
    ]
  ]
};