---
title: 'Setting up Python on M2 Macbook Air'
date: '2022-09-06'
tags: ['Apple', 'Python', 'Devtools', 'Development Setup']
---

## Prerequisites:

### 1. Install Command Line Developer Tools

- Open Terminal and type

```
xcode-select --install
```

- The following prompt will show up asking if you would like to install the tools now.
![XCode Popup](/images/xcode_select.png "XCode Popup")
- After it installs type this command in the Terminal

```
xcode-select -p
```

- The response should be

```
% /Library/Developer/CommandLineTools
```




### Step 1: Install Homebrew
- https://brew.sh

``` 
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


Run these two commands in your terminal to add Homebrew to your **PATH** (Homebrew gives these commands to you after installation):

```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/lukegrippa/.zprofile

eval "$(/opt/homebrew/bin/brew shellenv)"
```


Check if Homebrew is installed correctly

```
brew doctor
```


Terminal should respond

```
% Your system is ready to brew.
```




### Step 2: Install Pyenv

```
brew install pyenv
```


To update in the future use

```
brew update
brew upgrade pyenv
```


Add three lines to your configuration file

1. This  line sets an environment variable (`PYENV_ROOT`) that points to the pyenv directory.

```
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zprofile
```


2. This line puts pyenv first in your search path so that the OS will find pyenv’s Python(s) before any other Pythons.

```
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zprofile
```


3. This line initializes pyenv each time you open a terminal.

```
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n eval "$(pyenv init -)"\nfi' >> ~/.zprofile
```




### Step 3: Install Python Versions
- https://github.com/pyenv/pyenv/blob/master/COMMANDS.md


Before installing python I want to install a couple of packages

```
brew install openssl readline sqlite3 xz zlib
```


Check which version are available

```
pyenv install -l

pyenv install --list
```


Install latest version

```
pyenv install 3.10.5
```


Rehash Python binaries

```
pyenv rehash
```


Check which versions you have downloaded

```
pyenv versions
```


Set Global version of Python

```
pyenv global 3.10.5
```


Uninstall a version of Python

```
pyenv uninstall 3.10.5
```



### References
1. https://faun.pub/pyenv-multi-version-python-development-on-mac-578736fb91aa
2. https://www.freecodecamp.org/news/install-xcode-command-line-tools/
3. https://stackoverflow.com/questions/65619529/fixing-zsh-command-not-found-brew-installing-homebrew