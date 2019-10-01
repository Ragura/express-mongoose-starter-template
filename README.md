# Express + Mongoose Starter Template

## Description

Back-end project template with Express.js and Mongoose. Contains:

- Express.js
- Mongoose
- Dotenv
- Logging with Winston
- Example data structure (model, route, controller)

## Usage

### Using the template

Download this repository to get started. Unzip the contents to have a working project directory. Alternatively, click **Use this template** to create a new Git repository with this template as a base. Then clone the new repository to work locally.

### Install dependencies

```sh
yarn
```

### Environment variables

Using the dotenv package, simply create a .env file in the root. The template needs the following variables to exist:

```sh
DB_CONNECTION_STRING=
LOG_LEVEL=
```

### Run in development mode

```sh
yarn dev
```

### Run in production mode

```sh
yarn start
```
