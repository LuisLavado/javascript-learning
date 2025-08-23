**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Configurando supertest en el API

Para realizar Pruebas e2e, vamos a usar `supertest` y `jest`;

Primero en nuestra carpeta `api`:
```
mkdir e2e
cd e2e
touch jest-e2e.json
```

En `jest-e2e.json`:
```
{
  "moduleFileExtensions": [
    "js"
  ],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e.js$"
}

```
En el `package.json`, dentro de `scripts`:
```
"test:e2e": "jest --config ./e2e/jest-e2e.json --forceExit",
```

## Realazar la prueba
Para realizar nuestra primer prueba, vamos crear un aarchivo `hello.e2e.js` y escribimos:

```
const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    test('should return "Hello World!"', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});

```

Para correr nuestra prueba:
```
npm run test:e2e
```
