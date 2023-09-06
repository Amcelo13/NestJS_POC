<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>

</p>
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# This includes Mongo DB and .env functionality, Interceptors, Pipes and Validations
## Installation
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## To make a new module in nest
```bash
$ nest g module <module-name>  
```
It will automatically add a summary module in src/summary also this gets imported in app.module.ts in imports[]

## To make a new controller in nest
```bash
$ nest g controller <module-name>  
```

## To make a new service in nest
```bash
$ nest g service <module-name>  
``` 
## To add Mongo DB
```bash
$  npm i @nestjs/mongoose mongoose
```

## To add .env functionality
```bash
$  npm i @nestjs/config
```
And in imports in app.module.ts [add ConfigModule.forRoot() ]
