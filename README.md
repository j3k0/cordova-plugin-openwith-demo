# cordova-plugin-openwith-demo

<a href="https://fovea.cc"><img alt="Logo Fovea" src="https://fovea.cc/blog/wp-content/uploads/2017/09/fovea-logo-flat-128.png" height="59" /></a> &amp; <a href="https://www.interactivetools.com"><img alt="Logo InteractiveTools" src="https://www.interactivetools.com/assets/images/header/logo.png" height="59" /></a>

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> This is a demo app for Cordova's "Open With..." plugin ([cordova-plugin-openwith](https://github.com/j3k0/cordova-plugin-openwith)).

## Overview
This app will accept to be sent images. When an image is shared with the app, it'll load it and display it's size in bytes in the console. See `www/js/index.js` for the code.

## Table of Contents

- [Configuration](#configuration)
- [Usage](#usage)
- [API](#api)
- [License](#license)


## Configuration
Before launching, add the platform you want to test with.

    cordova platform add android

## Usage
Run the app with cordova:

    cordova run android --debug

Then you can use Chrome or Safari's dev tool to see what happens.

## Contribute

Contributions in the form of GitHub pull requests are welcome. Please adhere to the following guidelines:
  - Before embarking on a significant change, please create an issue to discuss the proposed change and ensure that it is likely to be merged.
  - Follow the coding conventions used throughout the project. Many conventions are enforced using eslint.
  - Any contributions must be licensed under the MIT license.

## License

[MIT](./LICENSE) © Fovea.cc
