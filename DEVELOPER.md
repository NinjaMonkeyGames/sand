# GAMEMAKER DEVELOPMENT TEMPLATE

This project serves as a template for GameMaker Studio Projects. It contains and number of YAML files used to perform
various linting tasks and code quality checks. The purpose is to provide a consistent development environment
across different projects.

---

## TABLE OF CONTENTS

<!-- markdownlint-disable MD013 -->
- [GAMEMAKER DEVELOPMENT TEMPLATE](#gamemaker-development-template)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [TARGET AUDIENCE](#target-audience)
  - [DEVELOPMENT ENVIRONMENT SETUP](#development-environment-setup)
    - [Dependencies](#dependencies)
      - [Visual Studio Code Core](#visual-studio-code-core)
      - [Visual Studio Code plugins](#visual-studio-code-plugins)
        - [cSpell](#cspell)
        - [GitHub Actions](#github-actions)
        - [JSDoc Validator](#jsdoc-validator)
        - [Markdown all-in-one](#markdown-all-in-one)
        - [Markdownlint](#markdownlint)
        - [YAML Language Support by Redhat](#yaml-language-support-by-redhat)
        - [Commitlint](#commitlint)
        - [Change-case](#change-case)
      - [Node Packages](#node-packages)
      - [System Utilities](#system-utilities)
      - [GameMaker Versions](#gamemaker-versions)
    - [IDE Setup](#ide-setup)
  - [WORKFLOW PROCESSES](#workflow-processes)
    - [Stage](#stage)
    - [Commit](#commit)
    - [Push](#push)
  - [Merge](#merge)
    - [Merge Develop \< Feature](#merge-develop--feature)
    - [Merge Release \< Develop](#merge-release--develop)
    - [Merge Master \< Release](#merge-master--release)
    - [Release](#release)
    - [Adding New Assets](#adding-new-assets)
  - [PROJECT STANDARDS](#project-standards)
    - [Semantic Versioning](#semantic-versioning)
    - [Commit Message Structure Formatting Rules](#commit-message-structure-formatting-rules)
      - [Commit Title](#commit-title)
        - [Type](#type)
          - [Feat](#feat)
          - [Fix](#fix)
          - [Docs](#docs)
          - [Style](#style)
          - [Refactor](#refactor)
          - [Perf](#perf)
          - [Test](#test)
          - [Build](#build)
          - [CI](#ci)
          - [Chore](#chore)
          - [Revert](#revert)
        - [Scope](#scope)
          - [Core](#core)
          - [API](#api)
          - [UI](#ui)
          - [Auth](#auth)
          - [DB (Database)](#db-database)
          - [Deps (Dependencies)](#deps-dependencies)
          - [Tests](#tests)
          - [Config](#config)
          - [Security](#security)
          - [Rebase](#rebase)
      - [Body](#body)
        - [Files](#files)
        - [Commit Types](#commit-types)
          - [Fix commit block](#fix-commit-block)
          - [Add commit block](#add-commit-block)
          - [Update](#update)
          - [Delete](#delete)
    - [GitFlow Branching Strategy](#gitflow-branching-strategy)
    - [Asset Naming Convention](#asset-naming-convention)
      - [GameMaker Asset Naming](#gamemaker-asset-naming)
  - [SECURITY PRACTICES](#security-practices)
  - [CODING STANDARDS](#coding-standards)
    - [Golden Rules](#golden-rules)
      - [Allman Style](#allman-style)
      - [Magic Numbers](#magic-numbers)
      - [JSDoc Comment Style](#jsdoc-comment-style)
  - [PROJECT ASSETS](#project-assets)
    - [CI Configuration Files \[.CONFIG\] 📁](#ci-configuration-files-config-)
      - [Attribute Table — \[.config\]](#attribute-table--config)
      - [Asset Purpose — \[.config\]](#asset-purpose--config)
      - [Asset Contents Description — \[.config\]](#asset-contents-description--config)
    - [MARKDOWNLINT-CLI2 CONFIGURATION FILE \[.MARKDOWNLINT-CLI2.JSONC\] 📄](#markdownlint-cli2-configuration-file-markdownlint-cli2jsonc-)
      - [Attribute Table — \[.markdownlint-cli2.jsonc\]](#attribute-table--markdownlint-cli2jsonc)
      - [Asset Purpose — \[.markdownlint-cli2.jsonc\]](#asset-purpose--markdownlint-cli2jsonc)
      - [Asset Contents Description — \[.markdownlint-cli2.jsonc\]](#asset-contents-description--markdownlint-cli2jsonc)
    - [COMMITLINT CONFIGURATION FILE \[COMMITLINT.CONFIG.JS\] 📄](#commitlint-configuration-file-commitlintconfigjs-)
      - [Attribute Table — \[commitlint.config.js\]](#attribute-table--commitlintconfigjs)
      - [Asset Purpose — \[commitlint.config.js\]](#asset-purpose--commitlintconfigjs)
      - [Asset Contents Description — \[commitlint.config.js\]](#asset-contents-description--commitlintconfigjs)
    - [CSPELL CONFIGURATION FILE \[CSPELL.JSON\] 📄](#cspell-configuration-file-cspelljson-)
      - [Attribute Table — \[cspell.json\]](#attribute-table--cspelljson)
      - [Asset Purpose — \[cspell.json\]](#asset-purpose--cspelljson)
      - [Asset Contents Description — \[cspell.json\]](#asset-contents-description--cspelljson)
    - [SMOKE TESTS \[DUPLICATE-COMMIT-TITLE.SH\] 📄](#smoke-tests-duplicate-commit-titlesh-)
      - [Attribute Table — \[duplicate-commit-title.sh\]](#attribute-table--duplicate-commit-titlesh)
      - [Asset Purpose — \[duplicate-commit-title.sh\]](#asset-purpose--duplicate-commit-titlesh)
      - [Asset Contents Description — \[duplicate-commit-title.sh\]](#asset-contents-description--duplicate-commit-titlesh)
    - [ESLINT CONFIGURATION \[ESLINT.CONFIG.JS\] 📄](#eslint-configuration-eslintconfigjs-)
      - [Attribute Table — \[eslint.config.js\]](#attribute-table--eslintconfigjs)
      - [Asset Purpose — \[eslint.config.js\]](#asset-purpose--eslintconfigjs)
      - [Asset Contents Description — \[eslint.config.js\]](#asset-contents-description--eslintconfigjs)
    - [CHECK COMMIT SIGNATURE \[SIGNED-OFF-BY-REGEX.JS\] 📄](#check-commit-signature-signed-off-by-regexjs-)
      - [Attribute Table — \[signed-off-by-regex.js\]](#attribute-table--signed-off-by-regexjs)
      - [Asset Purpose — \[signed-off-by-regex.js\]](#asset-purpose--signed-off-by-regexjs)
      - [Asset Contents Description — \[signed-off-by-regex.js\]](#asset-contents-description--signed-off-by-regexjs)
    - [GIT CONFIGURATION FILES \[.GIT\] 📁](#git-configuration-files-git-)
      - [Attribute Table — \[.git\]](#attribute-table--git)
      - [Asset Purpose — \[.git\]](#asset-purpose--git)
      - [Asset Contents Description — \[.git\]](#asset-contents-description--git)
    - [GITHUB FILES \[.GITHUB\] 📁](#github-files-github-)
      - [Attribute Table — \[.github\]](#attribute-table--github)
      - [Asset Purpose — \[.github\]](#asset-purpose--github)
      - [Asset Contents Description — \[.github\]](#asset-contents-description--github)
    - [GITHUB CI WORKFLOW FILES \[WORKFLOWS\] 📁](#github-ci-workflow-files-workflows-)
      - [Attribute Table — \[workflows\]](#attribute-table--workflows)
      - [Asset Purpose — \[workflows\]](#asset-purpose--workflows)
      - [Asset Contents Description — \[workflows\]](#asset-contents-description--workflows)
    - [CI CONTROLLER \[CI.YAML\] 📄](#ci-controller-ciyaml-)
      - [Attribute Table — \[ci.yaml\]](#attribute-table--ciyaml)
      - [Asset Purpose — \[ci.yaml\]](#asset-purpose--ciyaml)
      - [Asset Contents Description — \[ci.yaml\]](#asset-contents-description--ciyaml)
    - [LINTS COMMIT MESSAGES WITH COMMITLINT \[COMMITLINT.YAML\] 📄](#lints-commit-messages-with-commitlint-commitlintyaml-)
      - [Attribute Table — \[commitlint.yaml\]](#attribute-table--commitlintyaml)
      - [Asset Purpose — \[commitlint.yaml\]](#asset-purpose--commitlintyaml)
      - [Asset Contents Description — \[commitlint.yaml\]](#asset-contents-description--commitlintyaml)
    - [EXECUTES YAML SCRIPTS RELIVENET TO THE DEVELOPMENT WORKFLOW \[DEVELOPMENT.YAML\] 📄](#executes-yaml-scripts-relivenet-to-the-development-workflow-developmentyaml-)
      - [Attribute Table — \[development.yaml\]](#attribute-table--developmentyaml)
      - [Asset Purpose — \[development.yaml\]](#asset-purpose--developmentyaml)
      - [Asset Contents Description — \[development.yaml\]](#asset-contents-description--developmentyaml)
    - [LINTS MARKDOWN DOCUMENTS WITH MARKDOWNLINT \[MARKDOWNLINT.YAML\] 📄](#lints-markdown-documents-with-markdownlint-markdownlintyaml-)
      - [Attribute Table — \[markdownlint.yaml\]](#attribute-table--markdownlintyaml)
      - [Asset Purpose — \[markdownlint.yaml\]](#asset-purpose--markdownlintyaml)
      - [Asset Contents Description — \[markdownlint.yaml\]](#asset-contents-description--markdownlintyaml)
    - [EXECUTES YAML SCRIPTS RELIVENET TO THE PRODUCTION WORKFLOW \[PRODUCTION.YAML\] 📄](#executes-yaml-scripts-relivenet-to-the-production-workflow-productionyaml-)
      - [Attribute Table — \[production.yaml\]](#attribute-table--productionyaml)
      - [Asset Purpose — \[production.yaml\]](#asset-purpose--productionyaml)
      - [Asset Contents Description — \[production.yaml\]](#asset-contents-description--productionyaml)
    - [EXECUTES YAML SCRIPTS RELIVENET TO THE RELEASE WORKFLOW \[RELEASE.YAML\] 📄](#executes-yaml-scripts-relivenet-to-the-release-workflow-releaseyaml-)
      - [Attribute Table — \[release.yaml\]](#attribute-table--releaseyaml)
      - [Asset Purpose — \[release.yaml\]](#asset-purpose--releaseyaml)
      - [Asset Contents Description — \[release.yaml\]](#asset-contents-description--releaseyaml)
    - [BUMPS VERSION WITH SEMANTIC RELEASE \[SEMANTIC-RELEASE.YAML\] 📄](#bumps-version-with-semantic-release-semantic-releaseyaml-)
      - [Attribute Table — \[semantic-release.yaml\]](#attribute-table--semantic-releaseyaml)
      - [Asset Purpose — \[semantic-release.yaml\]](#asset-purpose--semantic-releaseyaml)
      - [Asset Contents Description — \[semantic-release.yaml\]](#asset-contents-description--semantic-releaseyaml)
    - [SMOKE TESTS \[SMOKE-TESTS.YAML\] 📄](#smoke-tests-smoke-testsyaml-)
      - [Attribute Table — \[smoke-tests.yaml\]](#attribute-table--smoke-testsyaml)
      - [Asset Purpose — \[smoke-tests.yaml\]](#asset-purpose--smoke-testsyaml)
      - [Asset Contents Description — \[smoke-tests.yaml\]](#asset-contents-description--smoke-testsyaml)
    - [EXECUTES YAML SCRIPTS RELIVENET TO THE STAGING WORKFLOW \[STAGING.YAML\] 📄](#executes-yaml-scripts-relivenet-to-the-staging-workflow-stagingyaml-)
      - [Attribute Table — \[staging.yaml\]](#attribute-table--stagingyaml)
      - [Asset Purpose — \[staging.yaml\]](#asset-purpose--stagingyaml)
      - [Asset Contents Description — \[staging.yaml\]](#asset-contents-description--stagingyaml)
    - [Visual Studio Code Settings \[.VSCODE\] 📁](#visual-studio-code-settings-vscode-)
      - [Attribute Table — \[.vscode\]](#attribute-table--vscode)
      - [Asset Purpose — \[.vscode\]](#asset-purpose--vscode)
      - [Asset Contents Description — \[.vscode\]](#asset-contents-description--vscode)
    - [VSC EXTENSIONS \[EXTENSIONS\] 📄](#vsc-extensions-extensions-)
      - [Attribute Table — \[extensions.json\]](#attribute-table--extensionsjson)
      - [Asset Purpose — \[extensions.json\]](#asset-purpose--extensionsjson)
      - [Asset Contents Description — \[extension.json\]](#asset-contents-description--extensionjson)
    - [VSC SETTINGS \[SETTINGS.JSON\] 📄](#vsc-settings-settingsjson-)
      - [Attribute Table — \[settings.json\]](#attribute-table--settingsjson)
      - [Asset Purpose — \[settings.json\]](#asset-purpose--settingsjson)
      - [Asset Contents Description — \[settings.json\]](#asset-contents-description--settingsjson)
    - [GIT IGNORE \[.GITIGNORE\] 📄](#git-ignore-gitignore-)
      - [Attribute Table - \[.gitignore\]](#attribute-table---gitignore)
      - [Asset Purpose - \[.gitignore\]](#asset-purpose---gitignore)
      - [Asset Contents Description - \[.gitignore\]](#asset-contents-description---gitignore)
    - [DEVELOPER DOCUMENT FILE \[DEVELOPER.MD\] 📄](#developer-document-file-developermd-)
      - [Attribute Table — \[DEVELOPER.md\]](#attribute-table--developermd)
      - [Asset Purpose — \[DEVELOPER.md\]](#asset-purpose--developermd)
      - [Asset Contents Description — \[DEVELOPER.md\]](#asset-contents-description--developermd)
    - [LICENSE \[LICENSE\] 📄](#license-license-)
      - [Attribute Table — \[LICENSE\]](#attribute-table--license)
      - [Asset Purpose — \[LICENSE\]](#asset-purpose--license)
      - [Asset Contents Description — \[LICENSE\]](#asset-contents-description--license)
    - [LOCK NPM PACKAGE DEPENDENCIES \[PACKAGE-LOCK.JSON\] 📄](#lock-npm-package-dependencies-package-lockjson-)
      - [Attribute Table — \[package-lock.json\]](#attribute-table--package-lockjson)
      - [Asset Purpose — \[package-lock.json\]](#asset-purpose--package-lockjson)
      - [Asset Contents Description — \[package-lock.json\]](#asset-contents-description--package-lockjson)
    - [NPM PACKAGE LIST \[PACKAGE.JSON\] 📄](#npm-package-list-packagejson-)
      - [Attribute Table — \[package.json\]](#attribute-table--packagejson)
      - [Asset Purpose — \[package.json\]](#asset-purpose--packagejson)
      - [Asset Contents Description — \[package.json\]](#asset-contents-description--packagejson)
    - [README DOCUMENT \[README.MD\] 📄](#readme-document-readmemd-)
      - [Attribute Table — \[README.md\]](#attribute-table--readmemd)
      - [Asset Purpose — \[README\]](#asset-purpose--readme)
      - [Asset Contents Description — \[README\]](#asset-contents-description--readme)
  - [CONTACT INFORMATION](#contact-information)
  - [COPYRIGHT](#copyright)

<!-- markdownlint-enable MD013 -->

---

## TARGET AUDIENCE

This project template is for anyone developing in GameMaker and wants a consistent professional development experience.

---

## DEVELOPMENT ENVIRONMENT SETUP

The section covers environment setup instructions and software versions.

⚠️ **You can use software versions other than the ones pinned in this repository but support for other versions is
not guaranteed.**

### Dependencies

#### Visual Studio Code Core

Version: 1.107.0
Commit: 618725e67565b290ba4da6fe2d29f8fa1d4e3622
Date: 2025-12-10T07:43:47.883Z
Electron: 39.2.3
ElectronBuildId: 12895514
Chromium: 142.0.7444.175
Node.js: 22.21.1
V8: 14.2.231.21-electron.0
OS: Linux x64 6.12.57+deb13-amd64

#### Visual Studio Code plugins

- streetsidesoftware.code-spell-checker
- streetsidesoftware.code-spell-checker-cspell-bundled-dictionaries
- github.vscode-github-actions
- zokkissoftwareschmiede.jsdoc-validator
- yzhang.markdown-all-in-one
- davidanson.vscode-markdownlint
- redhat.vscode-yaml
- joshbolduc.commitlint
- wmaurer.change-case

##### cSpell

cSpell is used to lint for spelling mistakes.

##### GitHub Actions

GitHub Actions is a plugin that allows you to run GitHub action workflows from inside VSC.

##### JSDoc Validator

JSDoc Validator ensures comments are in valid JSDoc format. This is in addition to GameMakers built-in feathering
system. This runs on both client and CI.

##### Markdown all-in-one

This is a plugin that allows you to preview markdown inside VSC. This is primarily used for its table of contents
function.

##### Markdownlint

Markdownlint is a VSC plugin that will lint markdown documents.

##### YAML Language Support by Redhat

This checks YAML structure against known configurations from a YAML database.

##### Commitlint

Commitlint ensures commit messages conforms to
[conventional-commit](https://www.conventionalcommits.org/en/v1.0.0issues) standards.

##### Change-case

This is a useful utility that allows you to easily change the case of selected text easily.

#### Node Packages

...

#### System Utilities

- GitHub Desktop    Version 3.4.9-linux1 (x64)
- Git               Version 2.52.0
- NodeJS            Version 24.11.1

#### GameMaker Versions

- GameMaker Studio 2 IDE          Version Beta 2024.1400.2.941
- GameMaker Studio 2 IDE Runtime  Version Beta 2024.1400.2.926

ℹ️ **Linux versions of this software are being utilised as an anti-windows stance.**

---

### IDE Setup

1. Open the repository in VSC.
2. You will see a popup asking if you want to install the recommended plugins.
3. Click `Install`.
4. Click `Terminal` in the VSC panel.
5. Type `npm install --save-dev.
6. press `Enter`.

## WORKFLOW PROCESSES

This section of the document explains the procedures that must be followed when working on the repository.
This includes things like making pull requests and committing code.

⚠️ **This is one of the most important sections of the document to read for new developers. Please follow all
procedures carefully. These procedures have been put in place for repository integrity.**

### Stage

CD to the working directory in a bash terminal.

```bash
cd <my-working-directory>
```

Ensure you are happy with your work. Check the `problems` field to see if you have any reported issues. You must
resolve these before pushing.

💡 **If you have any linting or formatting issues you will be able to push to feature but you will not be able to merge
so it is good practice to ensure you have rectified any issues before they are rejected by the CI checks.**

### Commit

1. Open .git/COMMIT_EDITMSG in a text editor (probably VSC).
2. Ensure the commit message conforms to Sematic Version rules and follows the guidelines for creating a commit message
for this repository. **See.** [commit-structure](#commit-message-structure-formatting-rules)

3. Type `git commit -m "$(cat .git/COMMIT_EDITMSG)`.
4. Enter the password for your GPG key.

### Push

Make sure you are happy with all of your changes.

Type git push origin <feature/name>

## Merge

### Merge Develop < Feature

1. Go to the repository landing page.
2. Click `Pull requests`.
3. Click `New pull request`.
4. Select `base:develop` : `compare:feature/name`.
5. Click `Create pull request`.
6. Select `Add a title` field and enter a valid Conventional Commit title.

**See.** [Commit Title](#commit-message-structure-formatting-rules)

1. Select the `Add a description` field then type description that adequately conveys the purpose of your pull request
with and references to open issues this PR will resolve.

1. Click `Merge pull request.

### Merge Release < Develop

1. Go to the repository landing page.
2. Click `Pull requests`.
3. Click `New pull request`.
4. Select `base:release` : `compare:develop`.
5. Click `Create pull request`.
6. Select `Add a title` field and enter a valid Conventional Commit title.
**See.** [Commit Title](#commit-message-structure-formatting-rules)

7. Select the `Add a description` field then type description that adequately conveys the purpose of your pull request
with and references to open issues this PR will resolve.

8. Click `Merge pull request.

### Merge Master < Release

1. Go to the repository landing page.
2. Click `Pull requests`.
3. Click `New pull request`.
4. Select `base:master` : `compare:release`.
5. Click `Create pull request`.
6. Select `Add a title` field and enter a valid Conventional Commit title.
**See.** [Commit Title](#commit-message-structure-formatting-rules)

7. Select the `Add a description` field then type description that adequately conveys the purpose of your pull request
with and references to open issues this PR will resolve.

8. Click `Merge pull request.

### Release

### Adding New Assets

When a new asset is added you must add an entry to `DEVELOPER.md`.

---

[Back to top](#gamemaker-development-template)

---

## PROJECT STANDARDS

This section of the document sets out a set of expectations regarding project standards.

### Semantic Versioning

This project employs the [Semantic Versioning v2.0.0](https://semver.org/)
standard.

### Commit Message Structure Formatting Rules

This section covers formatting rules for commit messages.

💡 **Use the `generate-commit-message.html` supplied with this repository to generate consistent commit message
formatting and style.**

#### Commit Title

ℹ️ **This project conforms to the conventional commit standard.
[conventional-commits](https://www.conventionalcommits.org/en/v1.0.0issues)**

Conventional commit titles are broken up into three main parts.

  1. Type
  2. Scope
  3. Title description

_Example:_ docs(core): update readme

⚠️ **Title description must be in all lower-case with no terminating full stop.**

##### Type

| Type      | Description                                                       |
|-----------|-------------------------------------------------------------------|
| feat      | New feature                                                       |
| fix       | Bug fix                                                           |
| docs      | Documentation changes                                             |
| style     | Code style changes (formatting, etc., no code change)             |
| refactor  | Refactor without adding new features or fixing bugs               |
| perf      | Performance improvements                                          |
| test      | Adding or updating tests                                          |
| build     | Changes to build system or dependencies                           |
| ci        | Continuous integration-related changes                            |
| chore     | Other changes that don't modify source or test files              |
| revert    | Reverts a previous commit                                         |

###### Feat

A new feature refers to anything that adds a functionality to a project that it
did not have before.

Example:

- Your building a website and you want to add a user login module
- Your building a game and you want to add a new mini-game.

ℹ️ **Feature is a keyword and will trigger a minor release in Semantic Version.**

###### Fix

A fix occurs when code that is functioning incorrectly or deviates from expected behaviour is corrected to align with
the intended specifications.

ℹ️ **Fix is a keyword and will trigger a patch release in Semantic Version.**

###### Docs

The docs type is used when the main changes in the commit are related to updating or modifying the project's
documentation.

_Example:_

- README.md
- DEVELOPER.md
- CONTRIBUTING.md
- LICENSE.md
- CODE_OF_CONDUCT.md

###### Style

Style refers to changes that are related to the formatting or styling of the code, without altering its functionality.
These are changes meant to improve readability, consistency, or adherence to style guidelines. This could include
things like indentation, spacing, naming conventions, or adding/removing line breaks.

_Example:_

- Adjusting indentation for consistency.
- Fixing spacing issues or aligning code.
- Renaming variables or functions to match a naming convention, even if it doesn’t affect how the code runs.
- The second part contains the scope.

###### Refactor

Refactor refers to making changes to the code that improve its structure or organization without changing its external
behaviour. Refactoring usually involves simplifying, optimizing, or cleaning up the code to make it easier to
maintain or extend, but it doesn’t add new features or fix bugs.

_Example:_

- Splitting a large function into smaller, more manageable ones.

###### Perf

Perf(performance) should be used anytime the efficiency the code is improved. This means reducing the number of
operations required to achieve the same result.

_Example:_

- Number of loop iterations has been reduced.
- Reduced number of calculations required to achieve the same result.

###### Test

Test refers to changes that add, update, or remove tests within the project. This includes unit tests,
integration tests,end-to-end tests, or any other kind of automated test designed to ensure the functionality
and stability of the application. It might also involve setting up or modifying testing frameworks and configurations.

_Example:_

- Writing new test cases to cover newly implemented features.
- Updating existing tests to match changes in the codebase.
- Removing obsolete or redundant tests.

###### Build

Build refers to changes that affect the build system or dependencies of the project. This includes modifications to
tools, configurations, or scripts that manage how the project is compiled, bundled, or deployed. It can also involve
updates to the dependencies (like libraries or frameworks) that the project relies on to run.

_Example:_

- Changing the way the project is packaged or deployed.
- Adding or removing build tools or scripts.

###### CI

CI refers to changes that are related to the continuous integration process. These changes typically involve updating
or configuring tools, scripts, or settings that manage the automated build and testing pipelines. The goal of CI is to
ensure that code is integrated frequently and tested automatically to catch issues early.

_Example:_

- Setting up or updating CI/CD pipelines (e.g., GitHub Actions).
- Modifying configuration files that control the build and test process in CI tools.
- Fixing issues with the automated build process or test environment.
- Adding new integration tests that are automatically run in the CI pipeline.

###### Chore

Chore refers to miscellaneous changes that don't fit into the other categories like fix, feature, or refactor.
These asterisks that might be necessary for maintaining the project, but they don’t directly affect the functionality
of the application. This could include tasks like updating dependencies, modifying configuration files, or
other housekeeping tasks.

_Example:_

- Updating or adding to the .gitignore file.
- Adding or modifying build scripts.
- Updating project dependencies or configuration files.
- Removing duplicated code.

###### Revert

Revert refers to undoing a previous commit or change in the codebase. This is typically used when a change introduces
issues or breaks functionality, and you need to restore the project to its prior state. A revert commit
effectively "reverses" one or more changes without manually removing the affected code.

_Example:_

- Reverting a commit that introduced a bug.
- Undoing changes that were made in a previous commit that are no longer needed or have caused problems.
- Restoring a file or set of files to their previous state after a problematic update.

##### Scope

| Scope     | Description                                                       |
|-----------|-------------------------------------------------------------------|
| core      | For core changes                                                  |
| api       | For API-related changes                                           |
| ui        | For UI-related changes                                            |
| auth      | For authentication changes                                        |
| db        | For database changes                                              |
| deps      | For dependency updates                                            |
| tests     | For test-related changes                                          |
| config    | For configuration updates                                         |
| security  | For security-related changes                                      |
| rebase    | For rebase-related changes                                        |

###### Core

Core refers to changes that directly impact the central functionality or architecture of the project. These changes
usually affect the most essential parts of the codebase, such as the core modules, libraries, or services that the rest
of the project relies on. They often require careful consideration because they may have a widespread impact.

_Example:_

- Rewriting the core functionality logic of an application.
- Updating the main processing engine that drives the applications operations.
- Modifying the base class or system that other features depend on.

---

###### API

API (Application Programming Interface) refers to changes made to the endpoints or services that allow communication
between different parts of the software or external systems. Changes in this scope typically affect how the
application interacts with other applications, databases, or services.

_Example:_

- Adding a new REST API endpoint for user registration.
- Modifying the response format of an existing API endpoint.
- Updating the authentication flow in the API to support OAuth2.

---

###### UI

UI (User Interface) refers to changes related to the graphical elements of the application that users interact with.
This includes layout, design, and user experience (UX) changes aimed at improving how the application looks or feels to
the user.

_Example:_

- Redesigning the navigation bar of the application.
- Adding new UI components like buttons or input fields.
- Fixing a bug where a button is not displayed correctly on mobile devices.

---

###### Auth

Auth refers to changes made to the authentication and authorization modules of the project. This includes any
functionality related to verifying users, managing user sessions, and controlling access to resources within the
application.

_Example:_

- Implementing two-factor authentication (2FA).
- Fixing a bug in the login flow that prevents users from accessing their accounts.
- Adding support for third-party login options, such as Google or Facebook login.

---

###### DB (Database)

DB refers to changes that involve the interaction between the application and its database. This can include
modifications to database schemas, queries, migrations, or how data is stored and retrieved.

_Example:_

- Adding a new table to the database for storing user preferences.
- Writing a migration to change the column type in a database table.
- Updating queries to optimize performance for large datasets.

---

###### Deps (Dependencies)

Deps refers to updates or changes related to the external libraries, frameworks, or tools the project relies on.
This includes updating package versions, adding new dependencies, or removing unused ones.

_Example:_

- Installing a new npm package to support a new feature.
- Removing an unused dependency from the `package.json` file.

---

###### Tests

Tests refers to any changes that involve the addition, modification, or removal of tests for the application.
This can include unit tests, integration tests, or end-to-end tests, ensuring the correctness of the code.

_Example:_

- Writing unit tests for a new feature or function.
- Updating existing test cases to reflect changes in the codebase.
- Removing outdated or redundant tests that no longer apply to the current code.

---

###### Config

Config refers to changes related to the configuration files and settings that control the behaviour of the project.
These files typically include environment settings, build configurations, or deployment settings.

_Example:_

- Modifying the `.env` file to add new environment variables.
- Updating the Webpack configuration to optimize production builds.
- Changing the `tsconfig.json` to adjust TypeScript compiler options.

---

###### Security

Security refers to changes aimed at improving the security of the project. This could involve fixing vulnerabilities,
adding encryption, or improving data protection mechanisms to safeguard the application and its users.

_Example:_

- Patching a vulnerability in a third-party package that exposes sensitive data.
- Implementing input validation to prevent SQL injection.
- Adding HTTPS support for secure communication between the client and server.

---

###### Rebase

Rebase refers to changes that involve reapplying a series of commits on top of another base commit, typically used in
Git version control. This is often done to maintain a clean and linear project history. Rebase is usually part of a
process of syncing a feature branch with the latest changes in the main branch.

_Example:_

- Rebasing a feature branch onto the latest version of the `master` branch to resolve conflicts and ensure
  compatibility.
- Updating a pull request with a rebase after new commits are pushed to the base branch.

---

#### Body

##### Files

The files block should list any files added, deleted or modified during the commit.

_Example:_

```markdown
File:

  - example-file.code
  - example-document.md
```

##### Commit Types

You can choose between 1 and 4 "Type" headings:

- Fix
- Add
- Update
- Delete

###### Fix commit block

A fix block should be added if a bug was fixed.

_Example:_

```markdown
Fix:

  Fixed example bug causing the dreaded example problem.
```

###### Add commit block

If a new asset was introduced to the project. This also applies when a new function is added to an
existing file.

_Example:_

```markdown
Add:

  Added example files. These files will serve nicely as an example.
```

###### Update

If an existing file or folder was renamed or its contents have been modified you should use the "Update" block.

_Example:_

```markdown
Update:

  Updated documentation `example-document.md` to reflect changes made to `example.file`.
```

###### Delete

If an existing asset is removed or significant blocks of code or functionality have been removed then the
"delete" block should be used.

---

[Semantic Release](https://github.com/semantic-release/semantic-release) is used to mange release and bump versions.

### GitFlow Branching Strategy

This project uses the
[GitFlow](https://gitworkflows.cs.manchester.ac.uk/workflow-catalogue/gitflow/?utm_source=chatgpt.com) branching model
by Vincent Driessen.

### Asset Naming Convention

- This project uses 'snake_case' for its file naming convention.
- All file names must be in lower case.

ℹ️ **There are exceptions to this rule. For example the README file is in upper-case because that is a
widely accepted standard.**

#### GameMaker Asset Naming

Note that GameMaker names its assets differently on the front end IDE than it does at the file level.
Please use the following prefixes when naming GameMaker assets internally:

| Rule Name                                 | Naming Style | Prefix  |
| :-----------------------------------------| :----------- | :------ |
| Instance Variable Naming                  | lower-case   |         |
| Local variable Naming                     | lower-case   | _       |
| Function parameter Naming                 | lower-case   | _       |
| Enum Naming                               | UPPER-CASE   |         |
| Enum Member Naming                        | UPPER-CASE   |         |
| Macro Naming                              | UPPER-CASE   |         |
| function Naming                           | lower-case   |         |
| Constructor Function Naming               | lower-case   |         |
| Extension Naming                          | lower-case   |         |
| Font Naming                               | lower-case   | fnt_    |
| Notes Naming                              | lower-case   |         |
| Object Naming                             | lower-case   | obj_    |
| Particle System Naming                    | lower-case   | ps_     |
| Path Naming Rule                          | lower-case   | pth_    |
| Room Naming                               | lower-case   | rm_     |
| Script Naming                             | lower-case   | spt_    |
| Sequence Naming                           | lower-case   | sqn_    |
| Shader Naming                             | lower-case   | shd_    |
| Sound Naming                              | lower-case   | snd_    |
| Sprite Naming                             | lower-case   | spr_    |
| Tileset Naming                            | lower-case   | tls_    |
| Timeline Naming                           | lower-case   | tml_    |
| Other Resource Naming                     | lower-case   |         |

---

[Back to top](#gamemaker-development-template)

---

## SECURITY PRACTICES

- All commits must be signed with a GPG key
- Always use environment secrets

🚨 **Never store keys and passwords in the repository**

- Never share keys for passwords with 3rd parties.
- Branch access is restricted to only those working on that branch.

---

[Back to top](#gamemaker-development-template)

---

## CODING STANDARDS

This section of the document covers various coding standards expected in the project.

### Golden Rules

1. Allman style
2. Magic numbers
3. JSDoc comment style

#### Allman Style

Allman style is the preferred style for this repository.

_Example:_

✅ **Correct**

```JavaScript
public class HelloWorld 
{
    public static void main(String[] args) 
    {
        System.out.println("Hello, World!");
    }
}
```

❌ **Incorrect**

```JavaScript
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

#### Magic Numbers

The use of magic numbers is forbidden.

#### JSDoc Comment Style

All comments made in GameMaker files should be commented using the [JSDoc](https://jsdoc.app/) standard.

**See.** [JSDoc](https://manual.gamemaker.io/beta/en/The_Asset_Editors/Code_Editor_Properties/JSDoc_Script_Comments.htm)
for GameMaker specific implementation.

---

[Back to top](#gamemaker-development-template)

---

## PROJECT ASSETS

This section of the document lists every asset in the project (with some exceptions which are noted).

### CI Configuration Files [.CONFIG] 📁

#### Attribute Table — [.config]

| Attribute             | Value     |
| :-------------------- | :-------- |
| Asset Name            | .config   |
| Relative Path         | /         |
| Include in Repository | Yes       |
| Asset Type            | FOLDER    |
| CI Type               | chore     |
| CI Scope              | config    |

#### Asset Purpose — [.config]

Stores configuration files for linters and other CI tools.

#### Asset Contents Description — [.config]

- .markdownlint-cli2.jsonc (Lints Markdown)

---

[Back to top](#gamemaker-development-template)

---

### MARKDOWNLINT-CLI2 CONFIGURATION FILE [.MARKDOWNLINT-CLI2.JSONC] 📄

#### Attribute Table — [.markdownlint-cli2.jsonc]

| Attribute               | Value                             |
|-------------------------|-----------------------------------|
| Asset Name              | .markdownlint-cli2.jsonc`         |
| Relative Path           | .config/.markdownlint-cli2.jsonc` |
| Include in Repository   | Yes                               |
| Asset Type              | JSONC                             |
| CI Type                 | chore                             |
| CI Scope                | config                            |

#### Asset Purpose — [.markdownlint-cli2.jsonc]

Defines project-specific linting rules, formatting preferences, and exclusions for Markdown files when using
markdownlint-cli2, ensuring consistency and maintainability across documentation.

#### Asset Contents Description — [.markdownlint-cli2.jsonc]

Contains JSONC configuration for markdownlint-cli2, including enabled/disabled rules, rule options, custom rules, and
an ignore list for excluded files or directories. This file enforces uniform Markdown styling across the repository
during development and CI processes.

**See.** [Markdownlint rules](https://github.com/DavidAnson/markdownlint)

---

[Back to top](#gamemaker-development-template)

---

### COMMITLINT CONFIGURATION FILE [COMMITLINT.CONFIG.JS] 📄

#### Attribute Table — [commitlint.config.js]

| Attribute               | Value                         |
| :---------------------- | :---------------------------- |
| Asset Name              | commitlint.config.js          |
| Relative Path           | .config/commitlint.config.js  |
| Include in Repository   | Yes                           |
| Asset Type              | JavaScript                    |
| CI Type                 | ci                            |
| CI Scope                | config                        |

#### Asset Purpose — [commitlint.config.js]

Ensure consistent commit message structure.

#### Asset Contents Description — [commitlint.config.js]

Contains Commitlint rules.

---

[Back to top](#gamemaker-development-template)

---

### CSPELL CONFIGURATION FILE [CSPELL.JSON] 📄

#### Attribute Table — [cspell.json]

| Attribute             | Value                       |
| --------------------- | --------------------------- |
| Asset Name            | cspell.json                 |
| Relative Path         | cspell.json                 |
| Include in Repository | Yes                         |
| Asset Type            | JSON                        |
| CI Type               | chore                       |
| CI Scope              | config                      |

#### Asset Purpose — [cspell.json]

Ensure spell check is consistent across environments.

#### Asset Contents Description — [cspell.json]

Stores list of exceptions and lists dictionaries to use.

---

[Back to top](#gamemaker-development-template)

---

### SMOKE TESTS [DUPLICATE-COMMIT-TITLE.SH] 📄

#### Attribute Table — [duplicate-commit-title.sh]

| Attribute             | Value                                   |
| :-------------------- | :-------------------------------------- |
| Asset Name            | duplicate-commit-title.sh               |
| Relative Path         | .config/duplicate-commit-title.sh       |
| Include in Repository | Yes                                     |
| Asset Type            | ShellScript                             |
| CI Type               | ci                                      |
| CI Scope              | config                                  |

#### Asset Purpose — [duplicate-commit-title.sh]

To maintain repository integrity.

#### Asset Contents Description — [duplicate-commit-title.sh]

Checks if the current commit message title is the same as the previous one. This serves the purpose of ensuring you
have not forgotten to update the commit message.

---

[Back to top](#gamemaker-development-template)

---

### ESLINT CONFIGURATION [ESLINT.CONFIG.JS] 📄

#### Attribute Table — [eslint.config.js]

| Attribute               | Value                         |
| :---------------------- | :---------------------------- |
| Asset Name              | eslint.config.js              |
| Relative Path           | .config/eslint.config.js      |
| Include in Repository   | Yes                           |
| Asset Type              | JavaScript                    |
| CI Type                 | ci                            |
| CI Scope                | config                        |

#### Asset Purpose — [eslint.config.js]

Ensure consistent JavaScript and JSDOC.

#### Asset Contents Description — [eslint.config.js]

Contains ESLint rules.

---

[Back to top](#gamemaker-development-template)

---

### CHECK COMMIT SIGNATURE [SIGNED-OFF-BY-REGEX.JS] 📄

#### Attribute Table — [signed-off-by-regex.js]

| Attribute               | Value                       |
| ----------------------- | --------------------------- |
| Asset Name              | signed-off-by-regex.js      |
| Relative Path           | signed-off-by-regex.js      |
| Include in Repository   | Yes                         |
| Asset Type              | JavaScript                  |
| CI Type                 | ci                          |
| CI Scope                | config                      |

#### Asset Purpose — [signed-off-by-regex.js]

Ensure the commit message contains a signature.

#### Asset Contents Description — [signed-off-by-regex.js]

A script runs a RegEx pattern to check if the commit message contains a valid commit.

---

[Back to top](#gamemaker-development-template)

---

### GIT CONFIGURATION FILES [.GIT] 📁

#### Attribute Table — [.git]

| Attribute             | Value        |
| --------------------- | ------------ |
| Asset Name            | `.git`       |
| Relative Path         | `.git`       |
| Include in Repository | No           |
| Asset Type            | FOLDER       |
| CI Type               | N/A          |
| CI Scope              | N/A          |

#### Asset Purpose — [.git]

Contains version control metadata required by Git.

#### Asset Contents Description — [.git]

Stores commit history, branches, and repository configuration. Created automatically by Git, not tracked in version
control.

---

[Back to top](#gamemaker-development-template)

---

### GITHUB FILES [.GITHUB] 📁

#### Attribute Table — [.github]

| Attribute             | Value        |
| --------------------- | ------------ |
| Asset Name            | `.github`    |
| Relative Path         | `.github`    |
| Include in Repository | Yes          |
| Asset Type            | FOLDER       |
| CI Type               | ci           |
| CI Scope              | config       |

#### Asset Purpose — [.github]

Provide a space to store configuration files and CI scripts relating to the GitHub platform.

#### Asset Contents Description — [.github]

Issues templates and CI workflow files.

- .github/workflows

---

[Back to top](#gamemaker-development-template)

---

### GITHUB CI WORKFLOW FILES [WORKFLOWS] 📁

#### Attribute Table — [workflows]

| Attribute             | Value                       |
| --------------------- | --------------------------- |
| Asset Name            | `workflows`                 |
| Relative Path         | `.github\workflows`         |
| Include in Repository | Yes                         |
| Asset Type            | FOLDER                      |
| CI Type               | ci                          |
| CI Scope              | config                      |

#### Asset Purpose — [workflows]

To maintain high standards by preventing bad code from perpetuating through the codebase.

#### Asset Contents Description — [workflows]

YAML scripts:

- .github/workflows/ci.yaml
- .github/workflows/commitlint.yaml
- .github/workflows/development.yaml
- .github/workflows/production.yaml
- .github/workflows/markdownlint.yaml
- .github/workflows/release.yaml
- .github/workflows/semantic-release.yaml
- .github/workflows/smoke-tests.yaml
- .github/workflows/staging.yaml

---

[Back to top](#gamemaker-development-template)

---

### CI CONTROLLER [CI.YAML] 📄

#### Attribute Table — [ci.yaml]

| Attribute             | Value                     |
| :-------------------- | :------------------------ |
| Asset Name            | ci.yaml                   |
| Relative Path         | .github/workflows/ci.yaml |
| Include in Repository | Yes                       |
| Asset Type            | YAML                      |
| CI Type               | ci                        |
| CI Scope              | config                    |

#### Asset Purpose — [ci.yaml]

To control the logical flow of CI scripts.

#### Asset Contents Description — [ci.yaml]

Detects environment development, staging, release or production. Calls the corresponding environment YAML.

---

[Back to top](#gamemaker-development-template)

---

### LINTS COMMIT MESSAGES WITH COMMITLINT [COMMITLINT.YAML] 📄

#### Attribute Table — [commitlint.yaml]

| Attribute             | Value                             |
| :-------------------- | :-------------------------------- |
| Asset Name            | commitlint.yaml                   |
| Relative Path         | .github/workflows/commitlint.yaml |
| Include in Repository | Yes                               |
| Asset Type            | YAML                              |
| CI Type               | ci                                |
| CI Scope              | config                            |

#### Asset Purpose — [commitlint.yaml]

Ensure commit messages are consistent and adhere to conventional commit standards.

#### Asset Contents Description — [commitlint.yaml]

Executes commitlint with .config/commitlint.config.js.

---

[Back to top](#gamemaker-development-template)

---

### EXECUTES YAML SCRIPTS RELIVENET TO THE DEVELOPMENT WORKFLOW [DEVELOPMENT.YAML] 📄

#### Attribute Table — [development.yaml]

| Attribute             | Value                             |
| :-------------------- | :-------------------------------- |
| Asset Name            | development.yaml                  |
| Relative Path         | .github/workflows/development.yaml|
| Include in Repository | Yes                               |
| Asset Type            | YAML                              |
| CI Type               | ci                                |
| CI Scope              | config                            |

#### Asset Purpose — [development.yaml]

Ensure the correct scripts are run relative to the environment it is running in.

#### Asset Contents Description — [development.yaml]

Calls:

- commitlint
- markdownlint
- smoke tests
- semantic release

---

[Back to top](#gamemaker-development-template)

---

### LINTS MARKDOWN DOCUMENTS WITH MARKDOWNLINT [MARKDOWNLINT.YAML] 📄

#### Attribute Table — [markdownlint.yaml]

| Attribute             | Value                               |
| :-------------------- | :---------------------------------- |
| Asset Name            | markdownlint.yaml                   |
| Relative Path         | .github/workflows/markdownlint.yaml |
| Include in Repository | Yes                                 |
| Asset Type            | YAML                                |
| CI Type               | ci                                  |
| CI Scope              | config                              |

#### Asset Purpose — [markdownlint.yaml]

Ensure markdown documents are consistent and adhere to the commonmark standard.

#### Asset Contents Description — [markdownlint.yaml]

Executes markdownlint with .config/.markdownlint-cli2.jsonc.

---

[Back to top](#gamemaker-development-template)

---

### EXECUTES YAML SCRIPTS RELIVENET TO THE PRODUCTION WORKFLOW [PRODUCTION.YAML] 📄

#### Attribute Table — [production.yaml]

| Attribute             | Value                             |
| :-------------------- | :-------------------------------- |
| Asset Name            | production.yaml                   |
| Relative Path         | .github/workflows/production.yaml |
| Include in Repository | Yes                               |
| Asset Type            | YAML                              |
| CI Type               | ci                                |
| CI Scope              | config                            |

#### Asset Purpose — [production.yaml]

Ensure the correct scripts are run relative to the environment it is running in.

#### Asset Contents Description — [production.yaml]

Calls:

- commitlint
- markdownlint
- smoke tests
- semantic release

---

[Back to top](#gamemaker-development-template)

---

### EXECUTES YAML SCRIPTS RELIVENET TO THE RELEASE WORKFLOW [RELEASE.YAML] 📄

#### Attribute Table — [release.yaml]

| Attribute             | Value                             |
| :-------------------- | :-------------------------------- |
| Asset Name            | release.yaml                      |
| Relative Path         | .github/workflows/release.yaml    |
| Include in Repository | Yes                               |
| Asset Type            | YAML                              |
| CI Type               | ci                                |
| CI Scope              | config                            |

#### Asset Purpose — [release.yaml]

Ensure the correct scripts are run relative to the environment it is running in.

#### Asset Contents Description — [release.yaml]

Calls:

- commitlint
- markdownlint
- smoke tests
- semantic release

---

[Back to top](#gamemaker-development-template)

---

### BUMPS VERSION WITH SEMANTIC RELEASE [SEMANTIC-RELEASE.YAML] 📄

#### Attribute Table — [semantic-release.yaml]

| Attribute             | Value                                   |
| :-------------------- | :-------------------------------------- |
| Asset Name            | semantic-release.yaml                   |
| Relative Path         | .github/workflows/semantic-release.yaml |
| Include in Repository | Yes                                     |
| Asset Type            | YAML                                    |
| CI Type               | ci                                      |
| CI Scope              | config                                  |

#### Asset Purpose — [semantic-release.yaml]

Automatically track and bump version numbers.

#### Asset Contents Description — [semantic-release.yaml]

Bumps version ans generates release if applicable.

---

[Back to top](#gamemaker-development-template)

---

### SMOKE TESTS [SMOKE-TESTS.YAML] 📄

#### Attribute Table — [smoke-tests.yaml]

| Attribute             | Value                                   |
| :-------------------- | :-------------------------------------- |
| Asset Name            | smoke-tests.yaml                        |
| Relative Path         | .github/workflows/smoke-tests.yaml      |
| Include in Repository | Yes                                     |
| Asset Type            | YAML                                    |
| CI Type               | ci                                      |
| CI Scope              | config                                  |

#### Asset Purpose — [smoke-tests.yaml]

To run additional checks for common issues.

#### Asset Contents Description — [smoke-tests.yaml]

Calls:

- duplicate-commit-title.sh

---

[Back to top](#gamemaker-development-template)

---

### EXECUTES YAML SCRIPTS RELIVENET TO THE STAGING WORKFLOW [STAGING.YAML] 📄

#### Attribute Table — [staging.yaml]

| Attribute             | Value                             |
| :-------------------- | :-------------------------------- |
| Asset Name            | staging.yaml                      |
| Relative Path         | .github/workflows/staging.yaml    |
| Include in Repository | Yes                               |
| Asset Type            | YAML                              |
| CI Type               | ci                                |
| CI Scope              | config                            |

#### Asset Purpose — [staging.yaml]

Ensure the correct scripts are run relative to the environment it is running in.

#### Asset Contents Description — [staging.yaml]

Calls:

- commitlint
- markdownlint
- smoke tests
- semantic release

---

[Back to top](#gamemaker-development-template)

---

### Visual Studio Code Settings [.VSCODE] 📁

#### Attribute Table — [.vscode]

| Attribute             | Value     |
| :-------------------- | :-------- |
| Asset Name            | .vscode   |
| Relative Path         | /         |
| Include in Repository | Yes       |
| Asset Type            | FOLDER    |
| CI Type               | chore     |
| CI Scope              | config    |

#### Asset Purpose — [.vscode]

Create a consistent IDE experience for all developers working on the project.

#### Asset Contents Description — [.vscode]

- extensions.json
- settings.json

---

[Back to top](#gamemaker-development-template)

---

### VSC EXTENSIONS [EXTENSIONS] 📄

#### Attribute Table — [extensions.json]

| Attribute             | Value         |
| :-------------------- | :------------ |
| Asset Name            | extensions    |
| Relative Path         | .vscode       |
| Include in Repository | Yes           |
| Asset Type            | JSON          |
| CI Type               | chore         |
| CI Scope              | config        |

#### Asset Purpose — [extensions.json]

Provide developers with a consistent experience by popping up a dialogue reporting any VSC plugins that have not
 been installed.

#### Asset Contents Description — [extension.json]

A list of VSC plugins that are required for the project workflow to function correctly.

---

[Back to top](#gamemaker-development-template)

---

### VSC SETTINGS [SETTINGS.JSON] 📄

#### Attribute Table — [settings.json]

| Attribute             | Value          |
| :-------------------- | :------------- |
| Asset Name            | settings.json  |
| Relative Path         | .vscode        |
| Include in Repository | Yes            |
| Asset Type            | JSON           |
| CI Type               | chore          |
| CI Scope              | config         |

#### Asset Purpose — [settings.json]

Provide a consistent development experience.

#### Asset Contents Description — [settings.json]

Contains a number of settings to make using VSC easier.

1. Automatic actions.
2. Add a visible ruler to the IDE.
3. Format settings.
4. Confirmation settings.
5. Include otherwise hidden folders in the file tree view.
6. Include otherwise excluded files in the project file search.
7. Start Terminal in Bash.
8. Automatically format JSON files on save.

---

[Back to top](#gamemaker-development-template)

---

### GIT IGNORE [.GITIGNORE] 📄

#### Attribute Table - [.gitignore]

| Attribute             | Value        |
|-----------------------|--------------|
| Asset Name            | `.gitignore` |
| Relative Path         | `.gitignore` |
| Include in Repository | Yes          |
| Asset Type            | TEXT         |
| CI Type               | N/A          |
| CI Scope              | N/A          |

#### Asset Purpose - [.gitignore]

Specifies which files or directories Git should ignore.

#### Asset Contents Description - [.gitignore]

Lists temporary files, build outputs, IDE configuration, and OS-specific files. This has been geared towards GameMaker.

---

[Back to top](#gamemaker-development-template)

---

### DEVELOPER DOCUMENT FILE [DEVELOPER.MD] 📄

#### Attribute Table — [DEVELOPER.md]

| Attribute             | Value          |
| --------------------- | -------------- |
| Asset Name            | `DEVELOPER.md` |
| Relative Path         | `DEVELOPER.md` |
| Include in Repository | Yes            |
| Asset Type            | MARKDOWN       |
| CI Type               | docs           |
| CI Scope              | core           |

#### Asset Purpose — [DEVELOPER.md]

Provides developers with all the information they need to work on the project effectively.

#### Asset Contents Description — [DEVELOPER.md]

Contains information for developers to work on the project.

- Target audience
- Development environment setup
- Workflow processes
- Merge
- Project standards
- Security practices
- Coding standards
- Project assets
- Contact information
- Copyright

---

[Back to top](#gamemaker-development-template)

---

### LICENSE [LICENSE] 📄

#### Attribute Table — [LICENSE]

| Attribute             | Value        |
| --------------------- | ------------ |
| Asset Name            | `LICENSE`    |
| Relative Path         | `LICENSE`    |
| Include in Repository | Yes          |
| Asset Type            | TEXT         |
| CI Type               | docs         |
| CI Scope              | core         |

#### Asset Purpose — [LICENSE]

Provides the legal framework under which the project can be used, modified, and redistributed.

#### Asset Contents Description — [LICENSE]

By default, this template includes the **GNU General Public License v3.0**.

---

[Back to top](#gamemaker-development-template)

---

### LOCK NPM PACKAGE DEPENDENCIES [PACKAGE-LOCK.JSON] 📄

#### Attribute Table — [package-lock.json]

| Attribute             | Value                 |
| --------------------- | --------------------- |
| Asset Name            | `package-lock.json`   |
| Relative Path         | `package-lock.json`   |
| Include in Repository | Yes                   |
| Asset Type            | JSON                  |
| CI Type               | chore                 |
| CI Scope              | config                |

#### Asset Purpose — [package-lock.json]

Locks down the exact versions of installed npm dependencies to ensure reproducible builds across environments.

#### Asset Contents Description — [package-lock.json]

Records the dependency tree, including resolved package versions, integrity hashes, and nested modules, so that installs
are deterministic and consistent with the declared dependencies in package.json.

---

[Back to top](#gamemaker-development-template)

---

### NPM PACKAGE LIST [PACKAGE.JSON] 📄

#### Attribute Table — [package.json]

| Attribute             | Value                 |
| --------------------- | --------------------- |
| Asset Name            | `package.json`        |
| Relative Path         | `package.json`        |
| Include in Repository | Yes                   |
| Asset Type            | JSON                  |
| CI Type               | chore                 |
| CI Scope              | config                |

#### Asset Purpose — [package.json]

Defines project metadata, dependencies, scripts, and configuration for the Node.js/npm

#### Asset Contents Description — [package.json]

Contains fields such as name, version, description, scripts, dependencies, devDependencies, and configuration used by
NPM and related tooling to manage and build the project.

---

[Back to top](#gamemaker-development-template)

---

### README DOCUMENT [README.MD] 📄

#### Attribute Table — [README.md]

| Attribute             | Value        |
| --------------------- | ------------ |
| Asset Name            | `README.md`  |
| Relative Path         | `README.md`  |
| Include in Repository | Yes          |
| Asset Type            | MARKDOWN     |
| CI Type               | docs         |
| CI Scope              | core         |

#### Asset Purpose — [README]

To provide a quick overview of the project scope.

#### Asset Contents Description — [README]

- Status badges
- Table of contents
- What is this repository for?
- Who is this repository for?
- CONTACT INFORMATION
- Copyright information

---

[Back to top](#gamemaker-development-template)

---

## CONTACT INFORMATION

Author: Daniel Mallett (Monkey Knuckles)

If you have any problems with the repository or have any suggestions please contact us at <info@ninjamonkeygames.com>.

You may also contact us via our [website](https://ninjamonkeygames.com).

Any bugs should be raised as an [issue](https://github.com/NinjaMonkeyGames/markdownlint-cli2/issues) on GitHub.

---

[Back to top](#gamemaker-development-template)

---

## COPYRIGHT

_NinjaMonkeyGames™ Copyright © 2025 All rights reserved._
