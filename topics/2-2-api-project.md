**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Proyecto de API
Descarga el proyecto API: https://github.com/platzi/curso-testing-js/tree/master/examples/api

Debes tener Docker instalado:
* [Docker for Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
* [Docker for WSL](https://docs.docker.com/desktop/features/wsl/)
* [Docker for MacOS](https://docs.docker.com/desktop/setup/install/mac-install/)
* [Docker for Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

Levanata la base de datos Mongo:
```
docker compose up -d mongo
```
```
docker compose ps
```
```
docker compose down
```
Para explorar las bases de datos en Mongo
[MongoDB Compass](https://www.mongodb.com/products/tools/compass)

Te conectas y creas una base de datos `demo` y un documento llamado `books`

Luego
```
npm run start
```
[<- Previous lesson |](./2-1-unit-tests.md)
[Next Lesson ->](./2-3-mocking-stub-doubles.md)
