# Setup

This document goes over all the dev environment setup necessary to get the best experience working on this website. I created it for my own sanity due to already having to go through this process thrice on various machines. 

<!-- omit in toc -->
## Table of Contents

- [IDE](#ide)
  - [VSCode Extensions](#vscode-extensions)
  - [User Settings](#user-settings)
- [Node](#node)
  - [NVM](#nvm)
  - [Install Node](#install-node)
  - [Node Modules](#node-modules)
- [Env](#env)

## IDE

Install [VSCode](https://code.visualstudio.com/). Due to its lightweight nature it is fast by default, and the crazy number of available extensions give you an incredible variety of customization options and language support.

After installing VSCode, make sure `Auto Save` is toggled on from the `File` menu. 

### VSCode Extensions

Install the following extensions: 

- ESLint
- Git History
- Git Lens
- Git Supercharged
- Prettier ESLint
- Vue Extension Box
- vue-helper

*Please note, some of the extensions may not work until the proper node packages are installed.*

### User Settings

Open the user `settings.json` by running the Command Palette with Ctrl+Shift+P (or by clicking `View` -> `Command Palette`) and selecting the `User Settings (JSON)` option.

Paste the following lines into the file. The file probably already has content, so make sure however you paste these lines that you retain proper JSON formatting, which means the last item in the list of key/value pairs needs to have no comma.

```json
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit",
    "source.unusedImports": "explicit",
},  
"editor.formatOnPaste": false, // required
"editor.formatOnType": false, // required
"editor.formatOnSaveMode": "file", // required to format on save
"files.autoSave": "onFocusChange", // optional but recommended

"[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
    "editor.maxTokenizationLineLength": 2500,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
]
```

## Node

[Node.js](https://nodejs.org) is the most common JavaScript runtime environment, and the one used for this website. Downloading it directly is somewhat of a pain, so use [nvm](https://github.com/nvm-sh/nvm) (node version manager) instead.

### NVM

Install `nvm` by running the following commands in Git Bash:

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

$ export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" 
$ [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

*Note: the reason to use Git Bash is that the nvm documentation expects you to use Linux. On Windows, Git Bash is the closest alternative.*

### Install Node

You can install a specific version of Node (such as `v18.19.0`) by running the following nvm command:

```bash
$ nvm install 18.19.0
```

To ensure this is the version of node that will be picked up by the Terminal, run the following nvm command:

```bash
$ nvm use 18.19.0
```

Just to be safe, confirm that the right version of Node is picked up by the terminal by running the following command and getting the expected result:

```bash
$ node -v
v18.19.0
```

### Node Modules

Node comes with npm (node package manager), which is what is used to install all the various imported modules of the site code. Run the following command from within the top level directory of this repo to install on the node modules:

```bash
$ npm i
```

This creates a `node_modules` folder and a `package-lock.json` file (if one did not already exist). 

Some of the previously installed VSCode Extensions may depend on some of the node modules that get installed with npm. Restart VSCode to ensure those extensions properly pick up the modules.

## Env

In the topmost repo directory, create an `.env` file that follows the pattern of `example.env`.
