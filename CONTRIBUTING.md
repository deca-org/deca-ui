# DecaUI Contributing Guide

Hello!, I am very excited that you are interested in contributing with DecaUI. However, before submitting your contribution, be sure to take a moment and read the following guidelines.

- [Code of Conduct](https://github.com/deca-org/deca-ui/blob/main/CODE_OF_CONDUCT.md)
- [Extraction request guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Visual Changes](#visual-changes)
- [Documentation](#documentation)

## Pull Request Guidelines

- The `main` branch is basically a snapshot of the latest stable version. All development must be done in dedicated branches.
- Make sure that Github Actions are green
- It is good to have multiple small commits while working on the PR. We'll let GitHub squash it automatically before the merge.
- If you add a new feature:
  - Add the test case that accompanies it.
  - Provide a compelling reason to add this feature. Ideally, I would first open a suggestion topic and green it before working on it.
- If you correct an error:
  - If you are solving a special problem, add (fix #xxxx [, # xxx]) (# xxxx is the problem identification) in your PR title for a better launch record, for example update entities encoding / decoding (fix # 3899).
  - Provide a detailed description of the error in the PR. Favorite live demo.
  - Add the appropriate test coverage, if applicable.

## Development Setup

After cloning the repository, execute the following commands in the root folder:

1. Install dependencies

```bash
npm install
```

2. Edit component / docs code

3. Previewing components using storybook

You can use this command to start up storybook:

```bash
npm run storybook
```

4. Test your code

```bash
npm run test
```

5. Create a branch for your feature or fix:

```bash
# Move into a new branch for your feature
git checkout -b feat/thing
```

```bash
# Move into a new branch for your fix
git checkout -b fix/something
```

6. If your code passes all the tests, then push your feature/fix branch:

All commits that fix bugs or add features need a test.

7. Be sure the package builds.

```
# Build current code
npm run build
```

> Note: ensure your version of Node is 14 or higher to run scripts

8. Send your pull request:

- Send your pull request to the `main` branch
- Your pull request will be reviewed by the maintainers and the maintainers will decide if it is accepted or not
- Once the pull request is accepted, the maintainers will merge it to the `main` branch

## Visual Changes

When making a visual change, please provide screenshots
and/or screencasts of the proposed change. This will help us to understand the
desired change easier.

## Documentation

If you want to make changes to existing pages on the documentation website (www.deca-ui.com),
please create an issue that includes the URL of the page you want the change to occur on, and a brief
description of what needs to be changed or documented



