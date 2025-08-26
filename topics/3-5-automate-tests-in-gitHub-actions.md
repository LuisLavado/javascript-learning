**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Automatizar tests en GitHubActions

En la consola, salimos de `webapp`, y vamos a la raíz del proyecto

```
cd ..
mkdir .github
cd .github
mkdir workflows
cd workflows
touch api-ci.yml
```
En `api-ci.yml`:
```
name: API CI

# on: [push]
on:
  push:
    paths:
      - "api/**"
      - ".github/workflows/api-ci.yml"

defaults:
  run:
    working-directory: api

jobs:
  linter:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Nodejs
        uses: actions/setup-node@v4
        with:
          node-version: 22.x
          cache: "npm"
          cache-dependency-path: api/package-lock.json
      - name: Install deps
        shell: bash
        run: npm ci
      - name: Run linter
        shell: bash
        run: npm run lint

  unit-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Nodejs
        uses: actions/setup-node@v4
        with:
          node-version: 22.x
          cache: "npm"
          cache-dependency-path: api/package-lock.json
      - name: Install deps
        shell: bash
        run: npm ci
      - name: Run unit tests
        shell: bash
        run: npm run test

  e2e:
    runs-on: ubuntu-latest
    container:
      image: node:22

    services:
      mongo-e2e:
        image: mongo:4.4
        ports:
          - 27017:27017
        env:
          MONGO_INITDB_ROOT_USERNAME: test
          MONGO_INITDB_ROOT_PASSWORD: test123

    steps:
        - name: Checkout
          uses: actions/checkout@v4
        - name: Install deps
          shell: bash
          run: npm ci
        - name: Run e2e
          shell: bash
          run: npm run test:e2e -- --runInBand --detectOpenHandles
          env:
            MONGO_DB_NAME: demo
            MONGO_URL: mongodb://test:test123@mongo-e2e:27017?retryWrites=true&writeConcern=majority

```

[<- Previous lesson](./3-4-ui-test.md)
