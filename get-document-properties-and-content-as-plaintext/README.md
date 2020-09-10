# get-document-properties-and-content-as-plaintext

A simple Node example to show how to get the metadata and content of a document from Panviva's APIs, utilizing `GET Document` and `GET Document Containers`

## Prerequisites
### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    vX.X.X

    $ npm --version
    X.X.X

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


### Configure Application

You will require `instance name` and `API key` from the [previous instructions](../README.md#how-to-get-credentials)
Entered the acquired credentials in the env file (`.env`)

## Go to correct directory
Navigate to correct directory where this README.md file is located.

    $ cd get-document-properties-and-content-as-plaintext

## Install

    $ npm install


## Running the Application

    $ npm start
