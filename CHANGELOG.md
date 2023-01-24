# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.5.2](https://github.com/deca-org/deca-ui/compare/v1.5.1...v1.5.2) (2023-01-24)


### Bug Fixes

* **components/checkbox:** fixed color of check when in darkmode ([c7c9223](https://github.com/deca-org/deca-ui/commit/c7c92234e732a460f905d527d5501dd356d4cc6e))

### [1.5.1](https://github.com/deca-org/deca-ui/compare/v1.5.0...v1.5.1) (2023-01-24)


### Bug Fixes

* **package.json:** switched clsx from dev dep to prod dep ([1faeb7e](https://github.com/deca-org/deca-ui/commit/1faeb7ee9d1ef17339f4c35fe36acb5e25e923fb))

## [1.5.0](https://github.com/deca-org/deca-ui/compare/v1.4.12...v1.5.0) (2023-01-24)


### Features

* **components/badge:** added polymorphic type to badge component ([7d9d533](https://github.com/deca-org/deca-ui/commit/7d9d5331f3f56ef749b25fddd20a192fd82b562a))
* **components/box:** added polymorphic type ([5a78c4a](https://github.com/deca-org/deca-ui/commit/5a78c4a2ff048bd33417d94672534dbd0af5fe49))
* **components/button:** added polymorphic type for button component ([f377b86](https://github.com/deca-org/deca-ui/commit/f377b86f565b684de7a5ede03c618227d0b565e0))
* **components/checkbox:** added general types to checkbox component ([f7b7585](https://github.com/deca-org/deca-ui/commit/f7b758546ca4256b08542d8ee6be830718ddabdf))
* **components/checkbox:** added polymorphic type to checkbox component ([1be592f](https://github.com/deca-org/deca-ui/commit/1be592f16b2ecb333d94c3d17e100029888e0b64))
* **components/checkboxgroup:** added polymorphism attributes to checkbox group component ([e1478c1](https://github.com/deca-org/deca-ui/commit/e1478c1b7922cdc7405e24dfd2761725f744cbfb))
* **components/container:** added polymorphic attribs to container component ([b976990](https://github.com/deca-org/deca-ui/commit/b976990268c791641fa38ea35af002d29222fe57))
* **components/grid:** added polymophism attribs to grid component & grid container ([1a2ad07](https://github.com/deca-org/deca-ui/commit/1a2ad0795e573a46cc4fe9d1693223bb47e32df1))
* **components/input:** polymorphic attribs to input component ([cd4b4e3](https://github.com/deca-org/deca-ui/commit/cd4b4e3112dcd084891162ad856a0793fdbc3795))
* **components/modal:** added polymorphic attribs to modal component ([3a74027](https://github.com/deca-org/deca-ui/commit/3a74027e81fe8e1fa2a26e5641ea7d097db0797f))
* **components/popover:** added polymorphic attribs to popover component ([5bd04f6](https://github.com/deca-org/deca-ui/commit/5bd04f6cd18351dc0a7233e2ab9a4bd751bfdd51))
* **components/radio:** added polymorphic attribs to radio component ([783726c](https://github.com/deca-org/deca-ui/commit/783726c4440674cd54bf2449e00b8e59c1febde3))
* **components/switch:** added polymorphic attribs to switch component ([36e32a5](https://github.com/deca-org/deca-ui/commit/36e32a575221968786cce2e78f5d6b6224d0c854))
* **components/text:** stronger types for text component ([0822a83](https://github.com/deca-org/deca-ui/commit/0822a83ec373c43846c07482f91319da358048d1))
* **types:** added MasterComponent type for easy creation of components that have sub components ([bca3bdc](https://github.com/deca-org/deca-ui/commit/bca3bdc8a8e08843a9b40d2775d1c024ff6bf91a))


### Bug Fixes

* **components/modal:** fixed minor bug in modal.stories.tsx ([bbc6147](https://github.com/deca-org/deca-ui/commit/bbc61474de3ad87534761567397f27ae68ed44b3))
* **inputgroups:** fixed inputgroup tests ([e19ca73](https://github.com/deca-org/deca-ui/commit/e19ca73e7ff0a389e06670b25952063d53ef327b))
* **storybook:** fixed broken storybook ([69dfb7f](https://github.com/deca-org/deca-ui/commit/69dfb7fa69963d4f03921e3131701aaaf8538d46))

### [1.4.12](https://github.com/deca-org/deca-ui/compare/v1.4.11...v1.4.12) (2022-10-24)


### Bug Fixes

* **package.json:** added keywords and homepage ([3d07aad](https://github.com/deca-org/deca-ui/commit/3d07aad07e03c2ecc7bd0acdc61798397ad40862))

### [1.4.11](https://github.com/deca-org/deca-ui/compare/v1.4.10...v1.4.11) (2022-10-24)


### Bug Fixes

* **readme:** made better README and changed LICENSE to include full name ([4d7e2ca](https://github.com/deca-org/deca-ui/commit/4d7e2cade6aac03949a60f520233bbca67f0528f))

### [1.4.10](https://github.com/deca-org/deca-ui/compare/v1.4.9...v1.4.10) (2022-08-30)


### Bug Fixes

* **components/text:** removed automatic text weighting when sizing text ([b2d9c4b](https://github.com/deca-org/deca-ui/commit/b2d9c4b9d798a8d12db89f16f8e55ae4060286bd))

### [1.4.9](https://github.com/deca-org/deca-ui/compare/v1.4.8...v1.4.9) (2022-08-30)


### Bug Fixes

* **components/text:** added mono prop so user does not have to manually change font-family ([bdb7cf9](https://github.com/deca-org/deca-ui/commit/bdb7cf9f2d2dd5efc3575e6b7d3a85d5a0e4ea3e))

### [1.4.8](https://github.com/deca-org/deca-ui/compare/v1.4.7...v1.4.8) (2022-08-30)


### Bug Fixes

* **components/text:** widened type for text size ([9aadca2](https://github.com/deca-org/deca-ui/commit/9aadca2d4399ecacc30dcf509a9792dbb008604d))

### [1.4.7](https://github.com/deca-org/deca-ui/compare/v1.4.6...v1.4.7) (2022-08-30)


### Bug Fixes

* **components/input:** fixed width not being applied to root container to input ([417c2e6](https://github.com/deca-org/deca-ui/commit/417c2e6f94b0a253c83c9f1c8edfd6fe4b275957))

### [1.4.6](https://github.com/deca-org/deca-ui/compare/v1.4.5...v1.4.6) (2022-08-29)


### Bug Fixes

* **components/grid:** fixed issue where custom css would override necessary css ([26fc928](https://github.com/deca-org/deca-ui/commit/26fc92859ee6a9d183b0d3dde93588ee5e365392))

### [1.4.5](https://github.com/deca-org/deca-ui/compare/v1.4.4...v1.4.5) (2022-08-29)


### Bug Fixes

* **components/grid:** fixed grid component breakpoints not being rendered properly ([9b6302f](https://github.com/deca-org/deca-ui/commit/9b6302fd0ddf1829ce442da543c84348b576ef2d))
* **popover & modal:** ssr fix ([5a5f996](https://github.com/deca-org/deca-ui/commit/5a5f9962f8f256edbf73ac05f2c86254371637f0))

### [1.4.4](https://github.com/deca-org/deca-ui/compare/v1.4.3...v1.4.4) (2022-08-25)


### Bug Fixes

* **components/grid:** fixed issue where max-width was zero on xs breakpoint ([9be7afe](https://github.com/deca-org/deca-ui/commit/9be7afee227704d0980cd324a3b2d85731198f70))

### [1.4.3](https://github.com/deca-org/deca-ui/compare/v1.4.2...v1.4.3) (2022-08-23)


### Bug Fixes

* **components/grid:** fixed problem where grid item props did not override grid container props ([b900f18](https://github.com/deca-org/deca-ui/commit/b900f18f102765251d185a74a0580cba21268a73))

### [1.4.2](https://github.com/deca-org/deca-ui/compare/v1.4.1...v1.4.2) (2022-08-20)


### Bug Fixes

* **components/text:** fixed issue where parent component would not override text color ([041a42f](https://github.com/deca-org/deca-ui/commit/041a42f19d374c8b56988339181c2d29d68a6709))

### [1.4.1](https://github.com/deca-org/deca-ui/compare/v1.4.0...v1.4.1) (2022-08-20)


### Bug Fixes

* **package.json:** seperated bump and release commands more safely ([ecea034](https://github.com/deca-org/deca-ui/commit/ecea034f5af901df3c290bb0ce73e71b44374a6e))

## [1.4.0](https://github.com/deca-org/deca-ui/compare/v1.2.7...v1.4.0) (2022-08-20)


### Features

* **components/grid:** created new breakpoint option (xl) ([7c0d1cf](https://github.com/deca-org/deca-ui/commit/7c0d1cf9d9e80a918be01de24a1bca576dde160a))

## [1.3.0](https://github.com/deca-org/deca-ui/compare/v1.2.7...v1.3.0) (2022-08-20)


### Features

* **components/button:** added dark mode to button component ([fa89846](https://github.com/deca-org/deca-ui/commit/fa89846dc2d69a3ed6aa24d3ab075523c1cd548c))
* **components/checkbox:** added darkmode to checkbox component ([3d15297](https://github.com/deca-org/deca-ui/commit/3d15297d535ce718466f2edfece2059d077e481d))
* **components/decauiprovider:** added dark mode option to theme provider ([c16d02e](https://github.com/deca-org/deca-ui/commit/c16d02e4c187623fb8740ef7e4b2e0604707ebdf))
* **components/input:** added dark mode to input component ([7bbe723](https://github.com/deca-org/deca-ui/commit/7bbe723ac9ae6312f8f2642e8ec2da653d440ff2))
* **components/modal:** added dark mode to modal component ([e4cdf03](https://github.com/deca-org/deca-ui/commit/e4cdf0321684e75eec52f3888ec8d3ee42c356ec))
* **components/popover:** added dark mode to popover component ([77755cb](https://github.com/deca-org/deca-ui/commit/77755cbe3ef0c19c7bc91a9cfcebf5f08b269ea3))
* **components/radio:** added dark mode to radio button ([516d467](https://github.com/deca-org/deca-ui/commit/516d46748004d92a1856592d15bde8daa066e063))
* **components/switch:** added dark mode to switch component ([d6f549f](https://github.com/deca-org/deca-ui/commit/d6f549f62e3ee8b62d00ace2881f7d4ab9e205b5))
* **components/text:** added dark mode to text component ([317023b](https://github.com/deca-org/deca-ui/commit/317023b9bead5628650765181219d186f80a9e71))


### Bug Fixes

* **components/checkbox:** fixed disabled state on checkbox component when dark mode is enabled ([d88faad](https://github.com/deca-org/deca-ui/commit/d88faade93005465f26bbe68decf6074c74dcc8a))

### [1.2.7](https://github.com/deca-org/deca-ui/compare/v1.2.6...v1.2.7) (2022-08-19)


### Bug Fixes

* **workflows/main.yml:** added conditional statement for release from tag ([fda8b16](https://github.com/deca-org/deca-ui/commit/fda8b16190b02c89c7f66d363e1e0aac96217301))
* **workflows/main.yml:** fix npm publish authentication problem ([6b46fa0](https://github.com/deca-org/deca-ui/commit/6b46fa0b4b3aa951b703188a15d4c40b6fb86b64))
* **workflows/main.yml:** fixed syntax error ([a4e8d36](https://github.com/deca-org/deca-ui/commit/a4e8d36bd1639bcbab9a9f3793b8608022482aaa))
* **workflows/main.yml:** fixed typo ([e831106](https://github.com/deca-org/deca-ui/commit/e831106751a71466707e0532c505f0f2e408bb23))
* **workflows/main.yml:** get latest tag ([38dfa88](https://github.com/deca-org/deca-ui/commit/38dfa88319bfb7ba2026d609c89117008b7006a5))
* **workflows/main.yml:** test for duplicate release or error ([08174a2](https://github.com/deca-org/deca-ui/commit/08174a27e7646e178a9fd2c40e86007b779fe16e))
* **workflows/main.yml:** testing just publish job ([7e0ff9a](https://github.com/deca-org/deca-ui/commit/7e0ff9ad405de6d8a679959870ca29a1e812d982))
* **workflows/main.yml:** used npm script instead of npx ([1bd0fa7](https://github.com/deca-org/deca-ui/commit/1bd0fa73fb0c3ae85be32939a3efcb4acb65c133))

### [1.2.6](https://github.com/deca-org/deca-ui/compare/v1.2.5...v1.2.6) (2022-08-19)


### Bug Fixes

* **workflows/main.yml:** fixed problem with build command in workflow ([10bd23c](https://github.com/deca-org/deca-ui/commit/10bd23c5d6f05a3152ff728d5177938ade98f36f))

### [1.2.5](https://github.com/deca-org/deca-ui/compare/v1.2.4...v1.2.5) (2022-08-19)


### Bug Fixes

* **workflows/main.yml:** fixed small workflow error ([c9c2e02](https://github.com/deca-org/deca-ui/commit/c9c2e021396f5dd24350ba1cba01b87713a6434c))

### [1.2.4](https://github.com/deca-org/deca-ui/compare/v1.2.3...v1.2.4) (2022-08-19)


### Bug Fixes

* **workflows/main.yml:** created new job to add changelog update to release ([212ccfa](https://github.com/deca-org/deca-ui/commit/212ccfaad51ebf37fb240604385fb5457233f282))

### [1.2.3](https://github.com/deca-org/deca-ui/compare/v1.2.0...v1.2.3) (2022-08-19)


### Bug Fixes

* **fakefeat:** second test for semantic release ([15cd3a8](https://github.com/deca-org/deca-ui/commit/15cd3a8ce5d9bd036c19469cc50b6fa5a98ed275))
* **semantic-release:** trying to fix semantic release ([5e56df5](https://github.com/deca-org/deca-ui/commit/5e56df5c1812bb9ec95179c93fce248835055411))
