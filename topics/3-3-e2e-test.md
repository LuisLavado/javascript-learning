**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# e2e Test
Mientras que para la pruebas de integración creamos datos fake y hacemos mocking, para las pruebas e2e realizamos todo el recorrido hasta la base de datos; pero para ello debemos usar una base de datos de prueba, en un entorno que no se conecte a producción.

Para seguir con el ejemplo vamos a agregar un servicio de base de datos en `docker-compose.yml`:
```
mongo-e2e:
    image: mongo:4.4
    environment:
      MONGO_INITDB_ROOT_USERNAME: test
      MONGO_INITDB_ROOT_PASSWORD: test123
    ports:
      - 27017:27017
```
Nuestro archivo `docker-compose.yml` quedaría así:
```
version: '3.3'

services:
  mongo:
    image: mongo:4.4
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: root123
    ports:
      - 27017:27017

  mongo-e2e:
    image: mongo:4.4
    environment:
      MONGO_INITDB_ROOT_USERNAME: test
      MONGO_INITDB_ROOT_PASSWORD: test123
    ports:
      - 27017:27017
```
Damos de bajo los servicios de docker que estén el nuestro proyecto `api`:
```
docker compose down
```
Luego levanatamos el servicio de base de datos `mongo-e2e` de Mongo:
```
docker compose up -d mongo-e2e
```

Ahora debemos trabajar sobre el archivo `books.e2e.js`. Para ello copiamos el archivo y renonbramos el archivo copiado a `books.integraation.js`. Y ahora podemos trabajar con `books.e2e.js`.

En `books.e2e.js` realizamos los cambios para que se conecte a la base de datos, gracias a las variables configuradas en `src/config/index.js`:
```
const request = require('supertest');

const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1998,
          author: 'Luisito',
        },
        {
          name: 'Book2',
          year: 1998,
          author: 'Luisito',
        },
      ]);
      console.log(seedData);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
```

Antes de realizar las pruebas debemos modificar nuestro `.env`:
```
MONGO_DB_NAME=demo
MONGO_URL=mongodb://test:test123@localhost:27017?retryWrites=true&writeConcern=majority
```

Aquí usamos el usuario `test` y su password `test123`.

Y ahora podemos correr las pruebas en nuestro proyecto `api`
```
npm run test:e2e
```

[<- Previous lesson |](./3-2-integration-test.md)
[Next Lesson ->](./3-4-ui-test.md)
